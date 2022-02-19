const sliderThumbs = new Swiper('.slider-thumbs', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
});

sliderThumbs.on('click', (swiper) => {
  swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper('.slider-main', {
  loop: true,
  thumbs: {
swiper: sliderThumbs,
  }
});