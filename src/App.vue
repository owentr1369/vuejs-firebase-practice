<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <template v-if="!isLoggedIn">
    <SignUpForm :changeStep="changeStep" v-if="step == 'signup'" />
    <LoginForm
      :setLogin="setLogin"
      :changeStep="changeStep"
      v-else-if="step == 'login'"
    />
  </template>
  <template v-else>
    <div class="welcome">
      <h1>Welcome to the app!</h1>
      <button @click="setLogout">Log out</button>
    </div>
  </template>
</template>

<script setup>
import { onMounted, ref } from "vue";

import LoginForm from "./components/LoginForm.vue";
import SignUpForm from "./components/SignUpForm.vue";
const step = ref("login");
const isLoggedIn = ref(false);
const changeStep = (newStep) => {
  step.value = newStep;
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const setLogin = () => {
  isLoggedIn.value = true;
};
const setLogout = () => {
  isLoggedIn.value = false;
};
onMounted(() => {
  console.log(getCookie("firebase_token"));
  // if (getCookie("firebase_token")) {
  //   isLoggedIn.value = true;
  //   console.log(getCookie("firebase_token"));
  // }
});
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
