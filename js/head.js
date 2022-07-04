//Inicializamos AOS librery
AOS.init();

const menu = document.getElementById('menu');
const menu_bar = document.getElementById('menu-bar');

menu_bar.addEventListener('click',function() {
    menu.classList.toggle('menu-toggle');
});