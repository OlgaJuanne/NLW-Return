window.addEventListener('scroll', onScroll )

onScroll() 
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2
     
 // verificar se a seção passou da linha 

  // o topa da seção
  const sectionTop = section.offsetTop
  // a altura da seção 
  const sectionHeight = section.offsetHeight
  // o topo da seção chegou ou ultrapassou a linha alvo 
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  
  //console.log('O topo da seção chegou ou passou da linha', sectionTopReachOrPassedTargetline)

  //verificaar se a base está a baixo da linha alvo
  //quais dados vou precisar?

  //a seção termina onde?
  const sectionEndAt = sectionTop + sectionHeight
  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndAt <= targetLine

  //limetes da seção
  console. log('O fundo da seção passou da linha?', sectionEndPassedTargetline)

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetline && 
  !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries){
    menuElement.classList.add('active')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    992: {
      slidesPerView:3,
      setWrapperSize:false
    }
  }
}) 

function showNavOnScroll() {
  if (scrollY > 0){
    navigation.classList.add('scroll')
  } else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550){
    backToTopButton.classList.add('show')
  } else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header,
#services .card,
#testimonials header, 
#testimonials .testimonials
#about,
#about header,
#about .content`)


// #MissionAccomplished ///