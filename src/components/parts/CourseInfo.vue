<script>
export default {
  data() {
    return {
      buttonName: "See more",
      buttonReport: "Support",
    };
  },
  methods: {
    touchDirect() {
      this.buttonName = "Wait a second";
      setTimeout(() => {
        this.buttonName = "Not Found 404";
      }, 1000);
    },
  },
};
</script>

<template>
  <section class="courseInfo">
    <div class="container">
      <div class="course-image">
        <span class="image-block"></span>
      </div>
      <div class="course__info">
        <div class="course-text">
          <h1 class="course__info-title">Web Development</h1>
          <p class="course__info-about">
            Web development, also known as website development, refers to the
            tasks associated with creating, building, and maintaining websites
            and web applications that run online on a browser. It may, however,
            also include web design, web programming, and database management.
            Web development is closely related to the job of designing the
            features and functionality of apps (web design). The term
            development is usually reserved for the actual construction of these
            things (that is to say, the programming of sites). The basic tools
            involved in web development are programming languages called HTML
            (Hypertext Markup Language), CSS (Cascading Style Sheets), and
            JavaScript. There are, however, a number of other programs used to
            “manage” or facilitate the construction of sites that would
            otherwise have to be done “from scratch” by writing code. A number
            of content management systems (CMS) fall into this category,
            including WordPress, Joomla!, Drupal, TYPO3, and Adobe Experience
            Manager, among others.
          </p>
        </div>
        <button class="touchDirection" @click="touchDirect">More</button>
        <button class="touchSupport" v-if="this.buttonName === 'Not Found 404'">
          Support
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.courseInfo {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  min-height: 20rem;
}

.courseInfo .container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
}
.course__info {
  width: 100%;
  padding: 0 1.5rem;
  height: 100%;
}

.course-image {
  height: 100%;
  background: url("https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg")
    no-repeat center center / cover;
  min-height: 30rem;
  max-width: 30rem;
  border-radius: 2rem;
  width: 100%;
}

.course__info-about {
  font-size: 1.6rem;
  line-height: 2.2rem;
  width: 95%;
  color: white;
  margin-bottom: 2rem;
}

.course__info-title {
  font-size: 3.2rem;
}

button {
  background: unset;
  border: 2px white solid;
  width: 100%;
  max-width: 125px;
  border-radius: 5px;
  padding: 1rem 2rem;
  cursor: pointer;
  color: white;
  margin-right: 1rem;
  transition: 300ms;
}

button:hover {
  background: white;
  color: black;
}
</style>
