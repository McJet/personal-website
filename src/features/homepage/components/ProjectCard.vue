<script setup>
const props = defineProps(["project"]);
const project = props.project;

const hasCtas = Array.isArray(project.ctas) && project.ctas.length > 0;
</script>

<template>
  <div class="project-card">
    <div
      class="image-wrapper"
      :style="{ backgroundImage: `url(${project.image})` }"
    ></div>
    <div class="description-wrapper">
      <div>
        <h4>{{ project.title }}</h4>
        <p class="subheader">{{ project.span }}</p>
      </div>
      <p>{{ project.description }}</p>
      <div class="skill-wrapper">
        <a
          v-for="skill in project.skills"
          :key="skill.name"
          class="skill"
          :href="skill.link"
          target="_blank"
        >
          {{ skill.name }}
        </a>
      </div>
      <div class="button-wrapper" v-if="hasCtas">
        <a
          v-for="(cta, index) in project.ctas"
          :class="['button', { inverted: index === 0 }]"
          :key="cta.link"
          :href="cta.link"
          target="_blank"
        >
          <span class="svg-icon" v-html="cta.svg"></span>
          {{ cta.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  border: solid 1px var(--color-border);
  border-radius: 8px;
  background-color: var(--color-bg);
  overflow: hidden;
  width: clamp(15rem, 100%, 30rem);
}
.image-wrapper {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  background-position: center;
  background-size: cover;
}
.description-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  flex-wrap: wrap;
  margin: 0 0 1em;
  a {
    text-wrap-mode: nowrap;
    text-decoration: none;
    padding: 0.1rem 0.4rem;
    border-radius: 8px;
    background-color: light-dark(
      rgba(0, 0, 0, 0.075),
      rgba(255, 255, 255, 0.1)
    );
    img {
      color: white;
    }
  }
}
.button-wrapper {
  display: flex;
  gap: 1rem;
  a {
    flex: 1;
    border-radius: 4px;
    padding: 0.5em;
    text-align: center;
    text-decoration: none;
  }
}
</style>
