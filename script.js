
const navBtn = document.querySelector('#navbar-bascule');
const navDiv = document.querySelector('.navbar-chute');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// redimensionnement fenêtre
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation');
    }, 400);
});