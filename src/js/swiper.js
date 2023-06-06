import Swiper, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

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
  autoHeight: true,
  modules: [Pagination],
})
