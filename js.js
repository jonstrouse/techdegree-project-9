
const minMenu = document.querySelector('.min-menu');
const menu = document.querySelector('.menu-container');
const exit = document.querySelector('.exit-menu');
const menuLink = document.querySelectorAll('.menu-link');

const mq = window.matchMedia( "(min-width: 750px)" );


function closeMenu() {
  menu.style.display = 'none';
}

minMenu.addEventListener('click', (event) => {
  menu.style.display = 'block';
});

exit.addEventListener('click', (event) => {
  closeMenu();
});

for (const link of menuLink) {
  link.addEventListener('click', (event) => {
    if (mq.matches) {
    } else {
      closeMenu()
    }
  });
};
