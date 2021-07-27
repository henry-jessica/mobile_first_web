//DOM Document Object Model
//estudar mais sobre objeto chamado Document
//document.body.style.background = 'red'
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Quando clicar nos elementos do menu fechar o menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando fizer o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight0) {
    header.classList.add('scroll')
    //scroll maior que a altura do header
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})

/*Testimonials swiper carrossell*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ScrollRevel :
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text, 
  #services header, #services .card, 
  #testimonials header,  #testimonials .testimonial,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
