<script>
export default {
  data() {
    return {
      touchAmount: 0,
    };
  },
  methods: {
    touchCount() {
      this.touchAmount += 1;
      console.log(
        `${this.touchAmount}${
          this.touchAmount === 1
            ? "st"
            : this.touchAmount === 2
            ? "nd"
            : this.touchAmount === 3
            ? "rd"
            : "th"
        } touch...`
      );
    },
  },
};
</script>

<template>
    <section class="gallery">
      <div class="container" @click="touchCount">
        <swiper class="swiper mySwiper2">
          <swiper-slide
            class="swiper-slide swiper__slide swiper-photo-slide"
          ></swiper-slide>
          <swiper-slide
            class="swiper-slide swiper__slide swiper-photo-slide"
          ></swiper-slide>
          <swiper-slide
            class="swiper-slide swiper__slide swiper-photo-slide"
          ></swiper-slide>
        </swiper>
      </div>
    </section>
</template>
