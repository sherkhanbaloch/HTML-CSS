
     var preloader = document.getElementById('loading');
     function MyFunction() {
         preloader.style.display = 'none';
     }


burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
menu = document.querySelector('.menu')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('height-nav');
    menu.classList.toggle('visibility-nav');
})