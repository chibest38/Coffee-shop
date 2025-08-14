const navLinks = document.querySelectorAll(".nav-links");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener('click', () => {
    // toorle mobile menu visibility
   document.body.classList.toggle("show-mobile-menu");
});
// close menu when th close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.
click())
//close when the nav links is clicked

navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
})
// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetweem: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   responsiveness breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
    slidesPerView: 2
    },
    1024: {
    slidesPerView: 3
    },
  }
});