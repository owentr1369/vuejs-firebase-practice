<template>
  <form @submit.self.prevent="onSignUp">
    <input type="text" v-model="signUpForm.email" placeholder="username" />
    <input type="email" v-model="signUpForm.username" placeholder="username" />
    <input
      type="password"
      v-model="signUpForm.password"
      placeholder="password"
    />
    <input type="submit" title="Sign Up" />
  </form>
</template>

<script setup>
import { ref } from "vue";

const signUpForm = ref({ username: "", password: "", email: "" });

const onSignUp = () => {
  console.log({
    username: signUpForm.value.username,
    password: signUpForm.value.password,
    email: signUpForm.value.email,
  });
};
</script>

<style>
</style>