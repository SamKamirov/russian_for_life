var dropdownMenu = document.querySelector('.menu')
console.log(dropdownMenu);

var headerMenuToggle = document.querySelector('.menu-toggle')
headerMenuToggle.addEventListener('click', ()=> {
    dropdownMenu.classList.toggle('menu--closed')
})