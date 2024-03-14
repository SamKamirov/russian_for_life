const openGuideWindowBtn = document.querySelector('.guide');
const closeGuideWindowBtn = document.querySelector('.popup-close-btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');

const closeGuideWindow = () => {
    popup.classList.add('popup-hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeyDown);
    // document.removeEventListener('click', onDocumentClick);
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
    // document.addEventListener('click', onDocumentClick);
};

const onOpenGuideWindowBtnClick = () => openGuideWindow();

const isGuideOpen = (evt) => !popup.classList.contains('popup-hidden') && !popupContent.contains(evt.target);

const initGuideWinListeners = () => {
    openGuideWindowBtn.addEventListener('click', onOpenGuideWindowBtnClick);
};

// const onDocumentClick = (evt) => ;

export { initGuideWinListeners };