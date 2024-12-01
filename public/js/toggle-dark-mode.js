const body = document.querySelector('body');
const modeToggleBtn = document.querySelector('.mode-toggle');
const menuToggleBtn = document.querySelector('.menu-toggle');
const guideToggleBtn = document.querySelector('.about-icon');

const onDOMLoaded = () => {
    if (localStorage.getItem('darkMode')) {
        body.classList.add('dark-mode');
        modeToggleBtn.classList.add('dark');
        modeToggleBtn.classList.add('fa-sun-o');
        menuToggleBtn.classList.add('dark');
        guideToggleBtn.classList.add('dark');
    } else {
        modeToggleBtn.classList.add('light');
        modeToggleBtn.classList.add('fa-moon-o');
        menuToggleBtn.classList.add('light');
        guideToggleBtn.classList.add('light')
    }
};

const onChangeModeBtnClick = () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
        modeToggleBtn.classList.replace('light', 'dark');
        modeToggleBtn.classList.replace('fa-moon-o', 'fa-sun-o');
        menuToggleBtn.classList.replace('light', 'dark');
        guideToggleBtn.classList.replace('light', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.removeItem('darkMode');
        modeToggleBtn.classList.replace('dark', 'light');
        modeToggleBtn.classList.replace('fa-sun-o', 'fa-moon-o');
        menuToggleBtn.classList.replace('dark', 'light');
        guideToggleBtn.classList.replace('dark', 'light')
    }
};

const toggleMode = () => {
    document.addEventListener('DOMContentLoaded', onDOMLoaded);
    modeToggleBtn.addEventListener('click', onChangeModeBtnClick);
};

export { toggleMode };