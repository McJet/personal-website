<script setup>
import { ref } from "vue";
import { signIn, auth } from "../main.js";
import { signOut } from "firebase/auth";

defineProps({
  isLoggedIn: Boolean,
});

const isModalEnabled = ref(false);

function onLeaderboardsClick() {
  notReady();
}
function onSignInClick() {
  signIn();
}
function onLogOutClick() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

function notReady() {
  alert("This feature is not ready yet!\n-Jet");
}
</script>

<template>
  <nav>
    <button class="title">Box Roulette</button>
    <div class="desktop-only">
      <button v-on:click="onLeaderboardsClick">Leaderboards</button>
      <button v-if="isLoggedIn" v-on:click="onLogOutClick">Log Out</button>
      <button v-else v-on:click="onSignInClick">Sign In</button>
    </div>
    <button class="mobile-only" v-on:click="isModalEnabled = !isModalEnabled">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect y="7" width="32" height="4" rx="2" fill="white" />
        <rect y="14" width="32" height="4" rx="2" fill="white" />
        <rect y="21" width="32" height="4" rx="2" fill="white" />
      </svg>
    </button>
  </nav>
  <Transition name="fade">
    <div
      class="modal-container mobile-only"
      v-show="isModalEnabled"
      v-on:click.self="isModalEnabled = false"
    >
      <Transition name="slide-from-top">
        <div class="modal" v-show="isModalEnabled">
          <button v-on:click="onLeaderboardsClick">Leaderboards</button>
          <button v-if="isLoggedIn" v-on:click="onLogOutClick">Log Out</button>
          <button v-else v-on:click="onSignInClick">Sign In</button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  width: 100dvw;
  max-width: 1440px;
  margin: 0 auto;
}

button {
  font-size: 24px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 64px;
  }
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 999;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 144px;
  border-radius: 0 0 24px 24px;

  button {
    color: black;
  }
}

.mobile-only {
  display: inherit;

  @media (min-width: 768px) {
    display: none;
  }
}

.desktop-only {
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: transform 0.5s;
}

.slide-from-top-enter-from,
.slide-from-top-leave-to {
  transform: translateY(-100%);
}
</style>
