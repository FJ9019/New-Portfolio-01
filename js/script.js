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



/*===== Swiper Projects =====*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
});


/*===== Swiper Testimonial =====*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});