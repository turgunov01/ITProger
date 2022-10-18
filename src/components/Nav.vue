<script>
export default {
  data() {
    links: ["Home", "Service", "Pricing", "Contact"];
  },
};
</script>
<template>
  <nav class="header__nav">
    <ul class="header__list">
      <li class="header__item">{{ this.links }}</li>
    </ul>
  </nav>
</template>
<style scoped></style>
