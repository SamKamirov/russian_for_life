var dropdownMenu = document.querySelector('.menu')
var body = document.querySelector('body')

var headerMenuToggle = document.querySelector('.menu-toggle')
var arrowButton = document.querySelector('.menu__link-arrow')


headerMenuToggle.addEventListener('click', (evt)=> {
    dropdownMenu.classList.toggle('menu--closed')
    headerMenuToggle.classList.toggle('hovered')
})

var arrowButtons = document.querySelectorAll('.menu__link-arrow')

for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].addEventListener('click', ()=> {
        console.log(arrowButtons[i].parentElement);
        arrowButtons[i].parentElement.parentElement.querySelector('.menu__inner-list').classList.toggle('unactive')
        if (arrowButtons[i].classList.contains('fa-plus')) {
            arrowButtons[i].classList.replace('fa-plus', 'fa-minus')
        }
        else {
            arrowButtons[i].classList.replace('fa-minus', 'fa-plus')
        }
    })    
}

