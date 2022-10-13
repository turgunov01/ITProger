<script setup>
import Swiper from "./parts/Swiper.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <h2 class="header__logo">ITCreators</h2>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <a
              href="#!"
              class="header__link"
              v-for="link in links"
              :key="link"
              >{{ link }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="swiper__container container">
    <Swiper />
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: ["Home", "Course", "Service", "Social Media", "Contact"],
    };
  },
};
</script>

<style scoped>
.header {
  z-index: 999;
}
</style>
