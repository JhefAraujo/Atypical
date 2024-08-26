function changeSection (element) {
    document.getElementsByClassName('active')[0].classList.remove('active');
    element.classList.add('active');
}

function spinLogo () {
    logo = document.getElementsByClassName('logo')[0];
    logo.style.animation = 'none';
    setTimeout(() => {
        logo.style.animation = 'spin 2.5s';
    }, 100);
}