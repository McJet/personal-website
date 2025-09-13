<script setup>
import ProjectCard from "./components/ProjectCard.vue";
</script>

<template>
  <section class="project">
    <div class="container">
      <h2 class="text-center">What I've Been Up To</h2>
      <div class="card-wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  background-color: var(--color-bg-secondary);
  min-height: 75vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
h2 {
  margin-bottom: 3rem;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
@media (min-width: 700px) {
  .card-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
}
</style>
