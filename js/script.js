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