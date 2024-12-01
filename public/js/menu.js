import { isGuideOpen } from "./guide.js";

const dropdownMenu = document.querySelector('.menu');
const headerMenuToggle = document.querySelector('.menu-toggle');
const arrowButtons = document.querySelectorAll('.menu__link-arrow');
const listMenuItems = document.querySelectorAll('.menu__inner-list');
const body = document.body;

const isModalOpened = () => body.classList.contains('modal-open');
const isGuideBtnClicked = (e) => e.target.closest('.guide');
const isModeToggleClicked = (e) => e.target.closest('.mode-toggle');

const onDocumentClick = (e) => {
    if (!dropdownMenu.contains(e.target) & !e.target.matches('.menu-toggle') & !isGuideBtnClicked(e) & !isModalOpened() & !isModeToggleClicked(e) & isGuideOpen()) {
        dropdownMenu.classList.add('menu--closed');
        headerMenuToggle.classList.remove('hovered');
        document.removeEventListener('click', onDocumentClick);
    }
};

const toggleMenu = () => {
    body.classList.toggle('modal-open')
    dropdownMenu.classList.toggle('menu--closed');
    headerMenuToggle.classList.toggle('hovered');
    document.addEventListener('click', onDocumentClick);
}

const onHeaderMenuToggleClick = () => toggleMenu();

const addSubMenuToggler = (subMenu, index) => {
    subMenu.addEventListener('click', () => {
        listMenuItems[index].classList.toggle('unactive');
        if (arrowButtons[index].classList.contains('fa-plus')) {
            arrowButtons[index].classList.replace('fa-plus', 'fa-minus');
        } else {
            arrowButtons[index].classList.replace('fa-minus', 'fa-plus');
        }
    });
};

const addSubMenuTogglers = () => {
    for (let i = 0; i < arrowButtons.length; i++) {
        arrowButtons[i].addEventListener('click', addSubMenuToggler(arrowButtons[i], i))
    }
};

const initMenuEventListeners = () => {
    headerMenuToggle.addEventListener('click', onHeaderMenuToggleClick);
    addSubMenuTogglers();
};

export { initMenuEventListeners, onDocumentClick };
