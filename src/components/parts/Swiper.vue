<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY >= 10) {
    header.style.position = "fixed";
    header.style.top = "0";
  } else {
    header.style.position = "fixed";
    header.style.top = "10px";
  }

  console.log();
});

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
    :autoplay="{
      delay: 3000,
    }"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    :initialSlide="2"
    :loop="false"
    :modules="modules"
    class="mySwiper swiper"
  >
    <swiper-slide class="swiper-slide" v-for="slide in slides" :key="slide">{{
      slide
    }}</swiper-slide>
  </swiper>
</template>

<style scoped>
.mySwiper {
  margin: 85px 0 10px 0;
}

.swiper-pagination {
  bottom: -1rem !important;
}
.swiper-slide {
  background: rgba(255, 255, 255, 0.1);
  color: rgb(255, 255, 255);
  height: 40rem;
  display: grid;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  place-items: center;
  cursor: pointer;
  transition: .3s;
}
.swiper-slide:hover {
  background: rgba(255, 255, 255, 0.5);
}

.swiper {
  text-align: center;
  font-size: 1.6rem;
}
</style>
