<script setup>
function goTo(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <section class="hero" id="heroSection">
    <div class="container">
      <h1 class="text-center">Full-Stack Web Developer</h1>
      <p class="text-center">
        My name is Jet Ysalina and I make websites.<br />
        Welcome! I hope you enjoy your stay.
      </p>
      <div class="mt-1 btn-container">
        <button class="inverted" @click="goTo('#projectSection')">
          View My Work
        </button>
        <!-- <button>Get In Touch</button> -->
      </div>
      <!-- <div class="mt-1 btn-container">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div> -->
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
