const menuFeatures = document.querySelector('.header-list__features');
const desktopMenu = document.querySelector('.desktop-menu');

menuFeatures.addEventListener('click', toggleDesktopFeatures);

function toggleDesktopFeatures () {
    desktopMenu.classList.toggle('inactive')
}



const menuCompany = document.querySelector('.header-list__company');
const desktopMenuCompany = document.querySelector('.desktop-menu__company');

menuCompany.addEventListener('click', toggleDesktopCompany);

function toggleDesktopCompany () {
    desktopMenuCompany.classList.toggle('inactive2')
}



const menuHamburguer = document.querySelector('.menu-hamburguer');
const mobileMenu = document.querySelector('.header-mobile-menu');

menuHamburguer.addEventListener("click", showMobileMenu)

function showMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}


const iconClose = document.querySelector('.icon-close-menu__mobile');
const mobileMenuOpen = document.querySelector('.header-mobile-menu');

iconClose.addEventListener("click", showMobileMenuMobile)

function showMobileMenuMobile(){
    mobileMenuOpen.classList.toggle('inactive')
}

//.icon-close-menu__mobile