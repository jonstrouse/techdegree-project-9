
const minMenu = document.querySelector('.min-menu');
const menu = document.querySelector('.menu-container');
const exit = document.querySelector('.exit-menu');
const menuLink = document.querySelectorAll('.menu-link');


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
    closeMenu();
  });
};
