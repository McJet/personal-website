<script setup>
import { ref, onBeforeMount } from "vue";
import Scoreboard from "./Scoreboard.vue";
import Box from "./Box.vue";
import gameController from "../gameController.js";
import SubmitButton from "./SubmitButton.vue";

const { loadNewBoxValues } = gameController();

onBeforeMount(() => {
  loadNewBoxValues();
});
</script>

<template>
  <div class="game">
    <Scoreboard />
    <div class="box-container">
      <Box :boxPosition="0" />
      <Box :boxPosition="1" />
      <Box :boxPosition="2" />
      <Box :boxPosition="3" />
    </div>
    <SubmitButton />
  </div>
</template>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: 100%;
  max-height: 950px;
  @media (min-width: 768px) {
    padding: 5dvh 0;
  }
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
}
</style>
