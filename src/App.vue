<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SignUpForm v-if="step == 'signup'" />
  <LoginForm v-else-if="step == 'login'" />
</template>

<script setup>
import { ref } from "vue";

import LoginForm from "./components/LoginForm.vue";
import SignUpForm from "./components/SignUpForm.vue";
const step = ref("login");
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  flex-direction: column;
  * {
    box-sizing: border-box;
  }
}
</style>
