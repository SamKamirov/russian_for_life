var body = document.querySelector('body')
var modeToggle = document.querySelector('.mode-toggle')
var menuToggle = document.querySelector('.menu-toggle')

let darkMode = false

modeToggle.addEventListener('click', ()=> {
    console.log(this);
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true')
        modeToggle.classList.replace('light', 'dark')
        modeToggle.classList.replace('fa-moon-o', 'fa-sun-o')
        menuToggle.classList.replace('light', 'dark')
    }
    else {
        body.classList.remove('dark-mode')
        localStorage.removeItem('darkMode')
        modeToggle.classList.replace('dark', 'light')
        modeToggle.classList.replace('fa-sun-o', 'fa-moon-o')
        menuToggle.classList.replace('dark', 'light')
    }
})

if (localStorage.getItem('darkMode')) {
    body.classList.add('dark-mode')
    modeToggle.classList.add('dark')
    modeToggle.classList.add('fa-sun-o')
    menuToggle.classList.add('dark')
}
else {
    modeToggle.classList.add('light')
    modeToggle.classList.add('fa-moon-o')
    menuToggle.classList.add('light')
}