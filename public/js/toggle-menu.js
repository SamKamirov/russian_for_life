const dropdownMenu= document.querySelector('.menu');
const headerMenuToggle = document.querySelector('.menu-toggle');
const arrowButtons = document.querySelectorAll('.menu__link-arrow');
const listMenuItems = document.querySelectorAll('.menu__inner-list');

const onWindowClick = (e) => {
    if (!dropdownMenu.contains(e.target) & !e.target.matches('.menu-toggle')) {
        dropdownMenu.classList.add('menu--closed');
        headerMenuToggle.classList.remove('hovered');
    }
};

const closeMenu = () => {
    window.addEventListener('click', onWindowClick);
};

const onHeaderMenuToggle = () => {
    dropdownMenu.classList.toggle('menu--closed');
    headerMenuToggle.classList.toggle('hovered');
    closeMenu();
};

const addSubMenuToggler = (subMenu, index) => {
    subMenu.addEventListener('click', () => {
        listMenuItems[index].classList.toggle('unactive');
        if (arrowButtons[index].classList.contains('fa-plus')) {
            arrowButtons[index].classList.replace('fa-plus', 'fa-minus');
        } else {
            arrowButtons[index].classList.replace('fa-minus', 'fa-plus');
        }
    })
};

const addSubMenuTogglers = () => {
  for (let i = 0; i < arrowButtons.length; i++) {
      arrowButtons[i].addEventListener('click', addSubMenuToggler(arrowButtons[i], i))
  }
};

// for (let i = 0; i < arrowButtons.length; i++) {
//     arrowButtons[i].addEventListener('click', () => {
//         arrowButtons[i].parentElement.parentElement
//             .querySelector('.menu__inner-list')
//             .classList.toggle('unactive');
//         if (arrowButtons[i].classList.contains('fa-plus')) {
//             arrowButtons[i].classList.replace('fa-plus', 'fa-minus');
//         } else {
//             arrowButtons[i].classList.replace('fa-minus', 'fa-plus');
//         }
//     });
// }

const toggleMenu = () => {
    addSubMenuTogglers();
    headerMenuToggle.addEventListener('click', onHeaderMenuToggle);
};

export {toggleMenu};
