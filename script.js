const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.querySelector('nav');
burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
});