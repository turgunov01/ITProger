<script setup>
import Swiper from "./parts/Swiper.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <h2 class="header__logo">ITProger</h2>
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
  <Swiper />
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
