<script setup>
import { ref, watch, computed } from "vue";
import gameController from "../gameController.js";

const props = defineProps({
  boxPosition: Number,
});

const { onBoxClick, boxValues, gameEndIndex, isBoxContentVisible } =
  gameController();

const boxValue = computed(() => {
  if (isBoxContentVisible.value) {
    if (gameEndIndex.value === props.boxPosition) {
      return "❌";
    }
    return `$${boxValues.value[props.boxPosition]}`;
  } else {
    return "?";
  }
});
</script>

<template>
  <button
    class="box"
    :class="{ error: gameEndIndex.value === props.boxPosition }"
    @click="onBoxClick(props.boxPosition)"
  >
    {{ boxValue }}
  </button>
</template>

<style scoped>
.box {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  color: black;
  font-size: clamp(2rem, 10vw, 4rem);
}
</style>
