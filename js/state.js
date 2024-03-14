const notification = document.querySelector('.notification-wrapper');
const DEFAULT_LAST_VISIT = 1200000;
// const DEFAULT_LAST_VISIT = 2;
const declineBtn = document.querySelector('.button__decline');

const checkLocation = () => {
    if (localStorage.getItem('location') === document.location.pathname) {
        localStorage.setItem('last-visit', String(Date.now()));
    }
};

const overrideLastVisitTime = () => {
    if (Number(Date.now()) - Number(localStorage.getItem('last-visit')) > DEFAULT_LAST_VISIT)
    {
        localStorage.setItem('last-visit', String(Date.now()));
        notification.classList.add('active');
    }
};
const updateLocationAndTime = () => {
    localStorage.setItem('last-visit', String(Date.now()));
    localStorage.setItem('location', document.location.pathname);
}
const hideModal = () => {
    localStorage.setItem('last-visit', String(Date.now()));
    document.querySelector('.notification-wrapper').classList.remove('active')
}

const onDeclineBtnClick = () => hideModal();
const onWindowLoad = () => {
    checkLocation();
    overrideLastVisitTime();
    updateLocationAndTime();

    declineBtn.addEventListener('click', onDeclineBtnClick)
};

const saveCurrentState = () => {
    window.addEventListener('load', onWindowLoad)
};

export {saveCurrentState};

