window.addEventListener('load', () => {
    if (document.location.pathname != localStorage.getItem('location')) {
        console.log('they"re not the same');
    }
    localStorage.setItem('location', document.location.pathname);
});
