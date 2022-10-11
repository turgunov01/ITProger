<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default {
  data() {
    return {
      slides: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="10"
    :autoplay="true"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    :initialSlide="2"
    :loop="true"
    :modules="modules"
    class="mySwiper swiper"
  >
    <swiper-slide class="swiper-slide" v-for="slide in slides" :key="slide">{{
      slide
    }}</swiper-slide>
  </swiper>
</template>
