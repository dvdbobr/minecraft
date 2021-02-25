const matrix = [
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
const gameLayout = document.querySelector('.gameLayout')
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
        const block = document.createElement('div');
        block.classList.add('block')
        gameLayout.appendChild(block);
        switch (matrix[row][col]) {
            case 1:
                block.classList.add('dirt')
                break;
            case 2:
                block.classList.add('grass');
                break;
            case 3:
                block.classList.add('wood');
                break;
            case 4:
                block.classList.add('leaves');
                break;
            case 5:
                block.classList.add('stone');
                break;
            case 6:
                block.classList.add('clouds');
                break;
            default:
                break;

        }

        //mapRow.appendChild(block); 

    }
}
// b = document.querySelector('.block');
// b.addEventListener('click', () => {
//     b.style.display = "none";
// })