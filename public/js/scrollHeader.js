let title = document.querySelector('.post-single__title');
let formatted = document.querySelector('.formatted')
let clone = title.cloneNode(true);
let cloneParent = document.querySelector('header .clone');
let logo = document.querySelector('.logo')
let header = document.querySelector('header .logo-link')

const titlePosition = title.getBoundingClientRect().top;


window.onscroll = () => {
    if (window.scrollY > titlePosition) {
        cloneParent.appendChild(clone);
    }

    else if (cloneParent.contains(clone)) {
        cloneParent.removeChild(clone)
        header.appendChild(logo)
    }

    if (window.scrollY > titlePosition && header.contains(logo) && window.outerWidth < 768) {
        header.removeChild(logo);
    }
}