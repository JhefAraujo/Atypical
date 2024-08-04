function changeSection (element) {
    document.getElementsByClassName('active')[0].classList.remove('active');
    element.classList.add('active');
}