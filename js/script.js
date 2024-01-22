let BTN = document.querySelector('#menu-btn');
let NAV = document.querySelector(' .header .flex .navbar');

function mm(){
    BTN.classList.toggle('fa-times');
    NAV.classList.toggle('i');
}



var swiper = new Swiper(".about-slider", {
    spaceBetween: 25,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
        
        },
        1024: {
          slidesPerView: 3,
      
        },
      },
  });
