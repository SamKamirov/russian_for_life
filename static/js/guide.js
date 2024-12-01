const openGuideWindowBtn = document.querySelector('.guide');
const closeGuideWindowBtn = document.querySelector('.popup-close-btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');

const closeGuideWindow = () => {
    popup.classList.add('popup-hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeyDown);
};

const onCloseBtnClick = () => closeGuideWindow();

const onDocumentKeyDown = (evt) => {
    if (evt.key === 'Escape') {
        closeGuideWindow();
    }
};

const openGuideWindow = () => {
    popup.classList.remove('popup-hidden');
    document.body.classList.add('modal-open');
    closeGuideWindowBtn.addEventListener('click', onCloseBtnClick);
    document.addEventListener('keydown', onDocumentKeyDown);
};

const onOpenGuideWindowBtnClick = () => openGuideWindow();

const isGuideOpen = () => !popup.classList.contains('popup-hidden');

const initGuideWinListeners = () => openGuideWindowBtn.addEventListener('click', onOpenGuideWindowBtnClick);

export { initGuideWinListeners, isGuideOpen };