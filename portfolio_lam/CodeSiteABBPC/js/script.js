const menubtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})

window.onscroll = ()=>{
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const swiper = new Swiper('.home-slider', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  window.addEventListener('load', () => {
    setTimeout(() => {
        const welcomeText = document.getElementById('welcome-text');
        if (welcomeText) {
            welcomeText.style.display = 'none';
        }
    }, 5000); // 5 secondes pour inclure l'animation complète
});


document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('active');
});




