const DEFAULT_LAST_VISIT = 1200000;
const notification = document.querySelector('.notification-wrapper');
const declineBtn = document.querySelector('.button__decline');
const acceptBtn = document.querySelector('.button__accept');

const setLocation = () => localStorage.setItem('location', document.location.pathname);
const updateLocation = () => localStorage.getItem('location') === document.location.pathname && setLastVisitTime();
const setLastVisitTime = () => localStorage.setItem('last-visit', Date.now());
const showNotification = () => notification.classList.remove('hidden');
const hideNotification = () => notification.classList.add('hidden');

const checkTimeDifference = () => {
    if (Number(Date.now()) - Number(localStorage.getItem('last-visit')) > DEFAULT_LAST_VISIT) {
        setLastVisitTime();
        showNotification();
        acceptBtn.href = localStorage.getItem('location');
    }
};

const updateLocationAndTime = () => {
    setLocation();
    setLastVisitTime();
};

const onDeclineBtnClick = () => {
    hideNotification();
    setLocation();
    setLastVisitTime();
};

const onWindowLoad = () => {
    updateLocation();
    checkTimeDifference();
    updateLocationAndTime();

    declineBtn.addEventListener('click', onDeclineBtnClick);
};

const saveCurrentState = () => window.addEventListener('load', onWindowLoad);

export { saveCurrentState };

