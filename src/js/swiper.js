import Swiper, { Pagination, Navigation } from 'swiper'

// import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'

new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    1024: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },

  autoHeight: true,
  modules: [Pagination, Navigation],
})
