<script setup></script>

<template>
  <section class="hero">
    <div class="container">
      <h1 class="text-center">Full-Stack Developer</h1>
      <p class="text-center">
        I craft digital experiences with clean code, modern technologies, and
        attention to detail. Passionate about building solutions that entertain,
        inform, and make a difference.
      </p>
      <div>
        <button>View My Work</button>
        <button>Get In Touch</button>
      </div>
      <div>
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
  }
}
</style>
