let postTitle = document.querySelector('.post-single__title') || undefined;
let titleClone = ''
let titlePosition = ''
const cloneParent = document.querySelector('.clone');
const logo = document.querySelector('.logo');
const headerLogo = document.querySelector('.logo-link');

const onWindowLoad = () => {
    if (!postTitle) return
    titleClone = postTitle.cloneNode(true);
    titlePosition = postTitle.getBoundingClientRect().top;
    window.addEventListener('scroll', onBodyScroll);
};

const onBodyScroll = () => {

    if (window.scrollY > titlePosition) {
        cloneParent.appendChild(titleClone);
    }

    else if (cloneParent.contains(titleClone)) {
        cloneParent.removeChild(titleClone)
        headerLogo.appendChild(logo)
    }

    if (window.scrollY > titlePosition && headerLogo.contains(logo) && window.outerWidth < 768) {
        headerLogo.removeChild(logo);
    }
};

const moveTitle = () => {
    window.addEventListener('load', onWindowLoad)
};

export {moveTitle};