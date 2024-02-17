let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
};

var swiper = new Swiper('.course-slider', {
    spaceBetween:20,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  var swiper = new Swiper('.reviews-slider', {
    spaceBetween:20,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
