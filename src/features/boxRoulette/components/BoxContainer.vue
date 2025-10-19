<script setup>
import Box from "./Box.vue";

const props = defineProps({
  box1Content: String,
  box2Content: String,
  box3Content: String,
  box4Content: String,
});
</script>

<template></template>

<style scoped>
.box-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1em;
  width: 90vw;
  height: 90vw;
  max-width: 500px;
  max-height: 500px;
}
</style>
