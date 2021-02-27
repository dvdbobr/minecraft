const landingPage = document.querySelector('#landingPage');
const start = document.querySelector('.startGame');

//make landing page disappear
start.addEventListener('click', () => {
    landingPage.style.display = "none";
    gameWorld.style.visibility = "visible";
    resetWorld();
    //createWorld();
    addListenersCheckMineable();
})