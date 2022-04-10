// DOM = Document Object Model
// Aber e fecha o menu quando clicar no icone: hamburger e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

// Quando clicar em um item do menu: esconder o menu

const links = document.querySelectorAll('.menu .grid .title') // nav ul li a

for (const link of links){

  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

// MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight
  
  if(this.window.scrollY > navHeight){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }

}


// TESTIMONIALS CAROUSEL SLIDER SWIPER  

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: 2
    }
  }

});


// Scroll Reveal: Show Elements when give scroll on the webpage

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true

})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, {interval: 100})




// Button back to top


function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(this.window.scrollY >= 1000){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function(){
  
})

// ACTIVE MENU AS PER THE SECTION ON THE PAGE
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint < sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }

}


window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

