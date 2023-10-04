window.addEventListener('load', () => {
    if (localStorage.getItem('location') === document.location.pathname) {
        localStorage.setItem('last-visit', Date.now())
        return
    }
    
    if (Number(Date.now()) - Number(localStorage.getItem('last-visit')) > 1200000)
    {
        document.querySelector('.notification-wrapper').classList.add('active')
        localStorage.setItem('last-visit', Date.now());
    }
    
    const notification = document.getElementById('notification-nav');
    const link = document.createElement('a');
    link.href = localStorage.getItem('location');
    link.textContent = 'Да';
    notification.appendChild(link);
    
    localStorage.setItem('last-visit', Date.now())
    localStorage.setItem('location', document.location.pathname);

    document.querySelector('.notification-nav-button__decline').addEventListener('click', ()=> {
        localStorage.setItem('last-visit', Date.now());
        document.querySelector('.notification-wrapper').classList.remove('active')
    })
});

