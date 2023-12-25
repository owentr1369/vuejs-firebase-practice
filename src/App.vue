<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SignUpForm v-if="step == 'signup'" />
  <!-- <LoginForm v-else-if="step == 'login'" /> -->
</template>

<script setup>
import { ref } from "vue";

// import LoginForm from "./components/LoginForm.vue";
import SignUpForm from "./components/SignUpForm.vue";
const step = ref("signup");
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
