<script>
export default {
  data() {
    return {
      photos: [],
      touchAmount: 0,
    };
  },
  methods: {
    touchCount() {
      this.touchAmount += 1;
      console.log(
        `${this.touchAmount} ${
          this.touchAmount === 1
            ? "st"
            : this.touchAmount === 2
            ? "nd"
            : this.touchAmount === 3
            ? "rd"
            : "th"
        }`
      );
    },
  },
};
</script>

<template>
  <main class="main">
    <section class="gallery">
      <div class="container"  @click="touchCount">
        asdf
        asdf
        asdf
        asdf
        <swiper class="swiper mySwiper2">
          <swiper-slide 
            class="swiper-slide swiper__slide swiper-photo-slide"
          ></swiper-slide>
        </swiper>
      </div>
    </section>
  </main>
</template>
