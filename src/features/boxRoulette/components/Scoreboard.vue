<script setup>
import { ref } from "vue";
import gameController from "../gameController.js";

const { moneyAmount, boxOpenedAmount } = gameController();
</script>

<template>
  <div class="scoreboard">
    <div class="inner">
      <p class="label">Money Earned</p>
      <p>${{ moneyAmount }}</p>
    </div>
    <div class="line"></div>
    <div class="inner">
      <p class="label">Boxes Opened</p>
      <p>{{ boxOpenedAmount }}</p>
    </div>
  </div>
</template>

<style scoped>
.scoreboard {
  display: flex;
  justify-content: center;
  gap: 1em;
  font-size: clamp(1rem, 5vw, 1.75rem);
}
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.label {
  font-weight: bold;
}
.line {
  width: 1px;
  background-color: white;
}
</style>
