var body = document.querySelector('body')
var modeToggle = document.querySelector('.mode-toggle')

let darkMode = false

modeToggle.addEventListener('click', ()=> {
    console.log(this);
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true')
        modeToggle.classList.remove('dark')
        modeToggle.classList.add('light')
    }
    else {
        body.classList.remove('dark-mode')
        localStorage.removeItem('darkMode')
        modeToggle.classList.remove('light')
        modeToggle.classList.add('dark')
    }
})

if (localStorage.getItem('darkMode')) {
    body.classList.add('dark-mode')
    modeToggle.classList.add('light')
}
else {
    modeToggle.classList.add('dark')
}