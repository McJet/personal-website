<script setup></script>

<template>
  <section class="hero">
    <div class="container">
      <h1 class="text-center">Full-Stack Developer</h1>
      <p class="text-center">
        I craft digital experiences using clean and efficient techniques.<br />
        Welcome to my website! I hope you enjoy your stay.
      </p>
      <div class="mt-1 btn-container">
        <button class="secondary">View My Work</button>
        <button>Get In Touch</button>
      </div>
      <div class="mt-1 btn-container">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  height: calc(100vh - 56px);
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  .btn-container {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
