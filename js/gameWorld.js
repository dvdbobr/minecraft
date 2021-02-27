const gameMatrix = [
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 6, 6, 6, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 4, 3, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 4, 4, 3, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [0, 0, 0, 0, 3, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 5, 5, 5, 5, 5],
    [0, 0, 0, 0, 3, 0, 0, 0, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const blockDictionary = {
    0: "sky",
    1: "dirt",
    2: "grass",
    3: "wood",
    4: "leaves",
    5: "stone",
    6: "clouds"
}
const blockInventory = {
    "sky": 0,
    "dirt": 0,
    "grass": 0,
    "wood": 0,
    "leaves": 0,
    "stone": 0,
    "clouds": 0
}

//global variables
let toolBeingUsed = -1;
let blockBeingUsed = -1;
let toolElement

//game world
const gameWorld = document.querySelector('#gameWorld');
const gameLayout = document.querySelector('.gameLayout');
const menuBtn = document.querySelector('.menu');
const resetBtn = document.querySelector('.reset');
//light/dark mode
const darkMode = document.querySelector('.darkMode');
const lightMode = document.querySelector('.lightMode');
const inventoryText = document.querySelectorAll('.inventory span');
const gameMainContent = document.querySelector('.gameMainContent');
//tools
const tools = document.querySelectorAll('.gameToolbar div');
const blocksInInventory = document.querySelectorAll('.inventory div');

tools.forEach(tool => {//which tool is being used

    tool.addEventListener('click', (e) => {
        pickTool(e)
        toolBeingUsed = e.currentTarget.classList[1];
    })
})
blocksInInventory.forEach(block => {//which block is being used
    block.addEventListener('click', (e) => {
        pickBlock(e)
        blockBeingUsed = e.currentTarget.classList[1];
    })
})
inventoryText.forEach(block => block.textContent = 0)//initialize count text of each block in inventory

function createWorld() {
    for (let row = 0; row < gameMatrix.length; row++) {//create the block in game layout
        for (let col = 0; col < gameMatrix.length; col++) {
            const block = document.createElement('div');
            block.classList.add('block');
            gameLayout.appendChild(block);
            switch (gameMatrix[row][col]) {//assign the proper class and attribute for each block
                case 1:
                    block.classList.add('dirt');
                    block.setAttribute('placeable', 'no')
                    block.setAttribute('block-type', 'dirt');
                    break;
                case 2:
                    block.classList.add('grass');
                    block.setAttribute('placeable', 'no')
                    block.setAttribute('block-type', 'grass');
                    break;
                case 3:
                    block.classList.add('wood');
                    block.setAttribute('placeable', 'no')
                    block.setAttribute('block-type', 'wood');
                    break;
                case 4:
                    block.classList.add('leaves');
                    block.setAttribute('placeable', 'no')
                    block.setAttribute('block-type', 'leaves');
                    break;
                case 5:
                    block.classList.add('stone');
                    block.setAttribute('placeable', 'no')
                    block.setAttribute('block-type', 'stone');
                    break;
                case 6:
                    block.classList.add('clouds');
                    block.setAttribute('placeable', 'no')
                    block.setAttribute('block-type', 'clouds');
                    break;
                default:
                    block.classList.add('sky');
                    block.setAttribute('placeable', 'yes')
                    block.setAttribute('block-type', 'sky');
                    break;
            }
            block.addEventListener('click', () => {// increase the count of appropriate blocks in inventory
                if (toolBeingUsed == "shovel" && (block.getAttribute('block-type') == 'dirt' || block.getAttribute('block-type') == 'grass'))//shovel
                    addBlocksToInventory(block, block.getAttribute('block-type'));
                else if (toolBeingUsed == "pickaxe" && block.getAttribute('block-type') == "stone")//pickaxe
                    addBlocksToInventory(block, block.getAttribute('block-type'));
                else if (toolBeingUsed == "axe" && (block.getAttribute('block-type') == 'wood' || block.getAttribute('block-type') == 'leaves'))//axe
                    addBlocksToInventory(block, block.getAttribute('block-type'));
                else if (toolBeingUsed == "hand" && block.getAttribute('block-type') == "clouds")//hand
                    addBlocksToInventory(block, block.getAttribute('block-type'));
                else {
                    if (toolBeingUsed != -1)
                        blinkIfWrong(toolElement);
                }
            });
        }
    }
}
//update count in inventory
function addBlocksToInventory(block, type) {
    let countType = "." + block.getAttribute('block-type') + "Count";
    let countSpan = document.querySelector(countType);
    countSpan.textContent = ++blockInventory[type];
}
//check which tool is picked
function pickTool(event) {
    blockBeingUsed = -1;
    toolElement = event.currentTarget;
    blocksInInventory.forEach(tool => {
        if (tool.classList.contains('pickedBlock'))
            tool.classList.remove('pickedBlock');
    });
    if (event.currentTarget.classList.contains("pickedTool")) {
        event.currentTarget.classList.remove("pickedTool");
    }
    else {
        tools.forEach((e) => e.classList.remove("pickedTool"));
        event.currentTarget.classList.add("pickedTool");
    }
}
//check which block is picked
function pickBlock(event) {
    toolBeingUsed = -1;
    tools.forEach(tool => {
        if (tool.classList.contains('pickedTool'))
            tool.classList.remove('pickedTool');
    });
    if (event.currentTarget.classList.contains("pickedBlock")) {
        event.currentTarget.classList.remove("pickedBlock");
    }
    else {
        blocksInInventory.forEach((e) => e.classList.remove("pickedBlock"));
        event.currentTarget.classList.add("pickedBlock");
    }
}
function blinkIfWrong(tool) {
    tool.classList.add('wrongBlock');
    setTimeout(() => {
        tool.classList.remove('wrongBlock')
    }, 300);
}

//check mineable blocks/colors background of picked tool
function addListenersCheckMineable() {
    const allBlocks = document.querySelectorAll('.block');
    allBlocks.forEach(block => {
        block.addEventListener('click', (e) => {
            if (toolBeingUsed == "shovel" && (block.getAttribute('block-type') == 'dirt' || block.getAttribute('block-type') == 'grass')) {//shovel  
                block.classList.remove('dirt', 'grass');
                block.setAttribute('placeable', 'yes');
                block.setAttribute('block-type', 'sky');
                block.classList.add('sky');
            }
            else if (toolBeingUsed == "pickaxe" && block.getAttribute('block-type') == 'stone') {//pickaxe
                block.classList.remove('stone');
                block.setAttribute('placeable', 'yes');
                block.setAttribute('block-type', 'sky');
                block.classList.add('sky');
            }
            else if (toolBeingUsed == "axe" && (block.getAttribute('block-type') == 'wood' || block.getAttribute('block-type') == 'leaves')) {//axe
                block.classList.remove('wood', 'leaves');
                block.setAttribute('placeable', 'yes');
                block.setAttribute('block-type', 'sky');
                block.classList.add('sky');
            }
            else if (toolBeingUsed == "hand" && block.getAttribute('block-type') == 'clouds') {//pickaxe
                block.classList.remove('clouds');
                block.setAttribute('placeable', 'yes');
                block.setAttribute('block-type', 'sky');
                block.classList.add('sky');
            }
        })
    })
}
//check if block can be placed
function addListenerCheckPlaceable() {
    const allBlocks = document.querySelectorAll('.block');
    allBlocks.forEach(block => {
        block.addEventListener('click', (e) => { checkAndUpdateBlockInventory(block) })
    })
}
//update inventory
function checkAndUpdateBlockInventory(block) {
    if (blockBeingUsed != -1) {
        let countType = "." + blockBeingUsed + "Count";
        let countSpan = document.querySelector(countType);
        if (block.getAttribute('placeable') == 'yes' && blockInventory[blockBeingUsed] > 0) {
            block.classList.remove('sky');
            block.setAttribute('placeable', 'no')
            block.setAttribute('block-type', blockBeingUsed)
            block.classList.add(blockBeingUsed);
            blockInventory[blockBeingUsed]--;
            countSpan.textContent = blockInventory[blockBeingUsed];
        }
    }
}
// resets the game
function resetWorld() {
    for (block in blockInventory) {
        blockInventory[block] = 0;
    }
    inventoryText.forEach(block => block.textContent = 0);
    tools.forEach(tool => {
        if (tool.classList.contains('pickedTool')) {
            tool.classList.remove("pickedTool");
        }
    });
    blocksInInventory.forEach(block => {
        if (block.classList.contains('pickedBlock')) {
            block.classList.remove("pickedBlock");
        }
    });
    toolBeingUsed = -1;
    gameLayout.innerHTML = '';
    createWorld();
    addListenersCheckMineable();
    addListenerCheckPlaceable();
}

//go back to menu
menuBtn.addEventListener('click', () => {
    landingPage.style.display = "block";
    gameWorld.style.visibility = "hidden";
    resetWorld();
});
//dark mode
darkMode.addEventListener('click', () => {
    lightMode.style.display = "block";
    gameMainContent.style.backgroundColor = "#2f2828";
    gameLayout.style.backgroundColor = "#171212";
    darkMode.style.display = "none";
})
//light mode
lightMode.addEventListener('click', () => {
    lightMode.style.display = "none";
    gameMainContent.style.backgroundColor = "#f6f6f6";
    gameLayout.style.backgroundColor = "lightblue";
    darkMode.style.display = "block";

})
//reset world
resetBtn.addEventListener('click', resetWorld);


