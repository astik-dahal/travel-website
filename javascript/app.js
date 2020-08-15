    const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 110){
        header.classList.add('header-active')
    }else{
        header.classList.remove('header-active')
    }
}


const navToggle = document.getElementsByClassName('nav-toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

navToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
navToggle.addEventListener('click', () => {
   nav-toggle.classList.toggle('active')
  })
navbarLinks.addEventListener('click', ()=>
{
    navbarLinks.classList.toggle('active')
})