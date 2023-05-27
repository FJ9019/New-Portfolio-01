/*====== Show Menu =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== Menu Show =====*/
/* Valide if constant existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}      

/*===== Menu Hidden =====*/
/* Validate if constant exist */
if(navClose){
    navClose.add.EventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===== Remove Menu Mobile =====*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('.nav-menu')
    // When we click on each nav__link, we remove the show-menu//
    navMennu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))