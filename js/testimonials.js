// Initialize a new Swiper instance with the specified options
var mySwiper = new Swiper(".swiper-container", {
  effect: "cards",
  cardsEffect: {
    perSlideOffset: 5, // Offset distance per slide (in px)
    perSlideRotate: 2, // Rotate angle per slide (in degrees)
    rotate: true, // Enables cards rotation
    slideShadows: true, // Enables slides shadows
  },
  grabCursor: true, // Enables grab cursor
  loop: true, // Enables loop mode
  keyboard: true, // Enables keyboard control
  navigation: {
    // Enables navigation arrows
    nextEl: "[swiper-button-next]",
    prevEl: "[swiper-button-prev]",
  },
  pagination: {
    // Enables pagination with clickable bullet points
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    // Enables autoplay with a delay of 2000 milliseconds (2 seconds)
    delay: 4000,
    disableOnInteraction: false,
  },
});

var swiperContainer = document.querySelector(".swiper-container");

swiperContainer.addEventListener("mouseenter", function () {
  mySwiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", function () {
  mySwiper.autoplay.start();
});
