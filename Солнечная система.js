const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  lazy: {
    loadPrevNext: true
  },

  slidesPerView: 3,

  slidesPerGroup: 1,

  centeredSlides: true,

  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});