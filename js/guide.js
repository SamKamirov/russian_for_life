document.querySelector('.guide').addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.popup').classList.remove('popup-hidden');
});

document.querySelector('.popup-close-btn').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('popup-hidden');
});
