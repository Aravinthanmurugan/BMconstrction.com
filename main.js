/*Show Menu */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
/* Menu */
/*validate if constant exits */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*hidden Menu */
/*validate if constant exits */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/**Remove Menu mobile */
const navLink = document.querySelectorAll('.nav--link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav link , we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/**Add Blur Background Header */
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader)
/**Email js */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //serviceID-templateID-#from-publickey
    emailjs.sendForm('service_40puf8g','template_rfrsuml','#contact-form','5lm0gXjWKrm35riZP')
      .then(()=>{
        //show sent message
        contactMessage.textContent='Message sent successfully ✔'
        //remove message after five sec
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)
        //clear input field
        contactForm.reset()
    },()=>{
        //show Error Message
        contactMessage.textContent='Message Not Send ❌'
      })
}    
contactForm.addEventListener('submit', sendEmail)
/**Show  scroll up */
const scrollUp=()=>{
    const scrollUp =document.getElementById('scroll-up')
    //scroll is higher than 350 viewport height,add the show-scroll class
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll') :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/**Scroll Active Link */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY=window.pageXOffset
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
              sectionTop=current.offsetTop-58,
              sectionId=current.getAttribute('id'),
              sectionsclass=document.querySelector('.nav--menu a [href*='+sectionId+']')
        if(scrollY>sectionTop&&scrollY<=sectionTop+sectionHeight){
            sectionsclass.classList.add('active-link')
        }else{
            sectionsclass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)