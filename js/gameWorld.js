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
const chosenTool = {
    "shovel": 0,
    "pickaxe": 1,
    "axe": 2
}
var toolBeingUsed = -1;
//game world
const gameWorld = document.querySelector('.gameWorld');
const gameLayout = document.querySelector('.gameLayout');
const menuBtn = document.querySelector('.menu');
const resetBtn = document.querySelector('.reset');
//tools
const shovel = document.querySelector('.gameToolbar>.shovel');
const pickaxe = document.querySelector('.gameToolbar>.pickaxe');
const axe = document.querySelector('.gameToolbar>.axe');
const tools = document.querySelectorAll('.gameToolbar div');


// tools.forEach(tool => {
//     //tool.addEventListener
//     tool.addEventListener('click', (e) => {
//         if (e.currentTarget.classList.contains('pickedTool'))
//             e.currentTarget.classList.remove('pickedTool');
//         else
//             e.currentTarget.classList.add('pickedTool');
//         // toolClass=e.currentTarget.classList[1];
//         // console.log(e.currentTarget.classList.remove)
//     })
// })
// shovel.addEventListener('click', (e) => {
//     console.log("click")
//     shovel.classList.toggle("wbw")
//     console.log(e.currentTarget)
// })

// pickTool(shovel)
// pickTool(pickaxe)
// pickTool(axe)
// pickTool(tools)
function createWorld() {
    for (let row = 0; row < gameMatrix.length; row++) {//create the block in game layout
        for (let col = 0; col < gameMatrix.length; col++) {
            const block = document.createElement('div');
            block.classList.add('block');
            gameLayout.appendChild(block);
            switch (gameMatrix[row][col]) {//assign the proper class and attribute for each block
                case 1:
                    block.classList.add('dirt');
                    block.setAttribute('block-type', 'dirt');
                    break;
                case 2:
                    block.classList.add('grass');
                    block.setAttribute('block-type', 'grass');
                    break;
                case 3:
                    block.classList.add('wood');
                    block.setAttribute('block-type', 'wood');
                    break;
                case 4:
                    block.classList.add('leaves');
                    block.setAttribute('block-type', 'leaves');
                    break;
                case 5:
                    block.classList.add('stone');
                    block.setAttribute('block-type', 'stone');
                    break;
                case 6:
                    block.classList.add('clouds');
                    block.setAttribute('block-type', 'clouds');
                    break;
                default:
                    block.classList.add('sky');
                    block.setAttribute('block-type', 'sky');
                    break;
            }
            //removeStyleFromAllElements()
            block.addEventListener('click', () => {// increase the count of appropriate blocks in inventory
                //block.getAttribute('block-type')
                let countType = "." + block.getAttribute('block-type') + "Count";
                let countSpan = document.querySelector(countType);
                console.log(countSpan);
                countSpan.textContent = ++blockInventory[blockDictionary[gameMatrix[row][col]]];
                //blockInventory[blockDictionary[gameMatrix[row][col]]]++
                console.log(block.getAttribute('block-type') + "Count", blockInventory[blockDictionary[gameMatrix[row][col]]]);
            });
        }
    }
}
//check which tool is picked
tools.forEach(tool => {
    tool.addEventListener('click', (e) => {
        pickTool(e)
        toolBeingUsed = chosenTool[e.currentTarget.classList[1]];
        console.log(e.currentTarget.classList[1], "is being used now -id:", toolBeingUsed)
    })
})
//functions
createWorld()

function resetWorld() {
    gameLayout.innerHTML = '';
    createWorld();
}
//colors background of picked tool
function pickTool(event) {
    if (event.currentTarget.classList.contains("pickedTool")) {
        event.currentTarget.classList.remove("pickedTool");
    }
    else {
        tools.forEach((e) => e.classList.remove("pickedTool"));
        event.currentTarget.classList.add("pickedTool");
    }
}
const allBlocks = document.querySelectorAll('.block');
console.log(allBlocks.length)
//check mineable blocks
allBlocks.forEach(block => {
    block.addEventListener('click', (e) => {
        if (toolBeingUsed == 0 && (e.currentTarget.getAttribute('block-type')=='dirt' || e.currentTarget.getAttribute('block-type')=='grass')) {//shovel  
            e.currentTarget.classList.remove('dirt');
            e.currentTarget.classList.remove('grass');
            e.currentTarget.classList.add('sky');
        }
        if (toolBeingUsed == 1 && e.currentTarget.getAttribute('block-type')=='stone') {//pickaxe
            e.currentTarget.classList.remove('stone');
            e.currentTarget.classList.add('sky');
        }
        if (toolBeingUsed == 2 && (e.currentTarget.getAttribute('block-type')=='wood' || e.currentTarget.getAttribute('block-type')=='leaves')) {
            e.currentTarget.classList.remove('wood');
            e.currentTarget.classList.remove('leaves');
            e.currentTarget.classList.add('sky');
        }
    })
})

function removeStyleFromAllElements() {
    document.querySelector('.dirt').remove(".dirt");
    document.querySelector('.grass').remove(".grass");
    document.querySelector('.wood').remove(".wood");
    document.querySelector('.stone').remove(".stone");
    document.querySelector('.clouds').remove(".clouds");
};
//go back to menu
menuBtn.addEventListener('click', () => {
    landingPage.style.display = "block";
    gameWorld.style.display = "none";
});
//reset world
resetBtn.addEventListener('click', () => {
    resetWorld();
})


