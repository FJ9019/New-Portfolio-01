// sjekk superhi background-color change

// get elements
const body = window.innerHeight;
const overlayTag = document.querySelector('#js-overlay');

// add opacity on scroll
overlayTag.style.opacity = 0
overlayTag.style.height = body

document.addEventListener('scroll', function () {
  window.pageYOffset
})

