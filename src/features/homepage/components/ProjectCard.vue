<script setup>
const skills = ["ASP.NET Core", "Umbraco", "Sass", "Vue.js", "Javascript"];
</script>

<template>
  <div class="project-card">
    <div class="image-wrapper">
      <img src="../assets/saddleback.png" />
    </div>
    <div class="description-wrapper">
      <h4>Saddleback.com</h4>
      <p class="subheader">2023 - Current</p>
      <p>
        I am currently working for Saddleback Church as a Full-Stack Web
        Developer. Maintaining and building features within the website are a
        few of the things that I do on a daily basis.
      </p>
      <div class="skill-wrapper">
        <span v-for="skill in skills" :key="skill" class="skill">{{
          skill
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border: solid 1px var(--color-border);
  border-radius: 8px;
  background-color: var(--color-bg);
  overflow: hidden;
  width: clamp(15rem, 100%, 35rem);
}
.image-wrapper {
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
.description-wrapper {
  padding: 1rem;
  padding-top: 1.5rem;
}
h4 {
  margin: 0;
}
.subheader {
  font-style: italic;
}
.skill-wrapper {
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  span {
    padding: 0.1rem 0.4rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
