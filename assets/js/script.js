const buttonMenu = document.getElementById('buttonMenu');
const nav = document.querySelector('nav');

function toggleMenu(event) {
    if (event.type === 'touchstart') { 
        event.preventDefault();
    }
    const menu = nav;
    menu.classList.toggle('active');
}



buttonMenu.addEventListener('click', toggleMenu);
buttonMenu.addEventListener('touchstart', toggleMenu);