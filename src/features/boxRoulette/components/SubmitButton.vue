<script setup>
import { ref } from "vue";
</script>

<template>
  <button class="submit-button">Submit</button>
</template>

<style scoped>
.submit-button {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: black;
  width: 90vw;
  height: 64px;
  max-width: 500px;
  font-size: 2rem;
  display: none; /* hide for now */
}
</style>
