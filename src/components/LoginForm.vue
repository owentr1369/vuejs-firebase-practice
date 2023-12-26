<template>
  <form @submit.self.prevent="onSignUp" class="signup-form">
    <input
      type="text"
      v-model="loginForm.email"
      placeholder="Email"
      autocomplete="username"
    />
    <input
      type="password"
      v-model="loginForm.password"
      placeholder="Password"
      autocomplete="current-password"
    />
    <input type="submit" value="Login" />
  </form>
</template>

<script setup>
import { ref } from "vue";

const loginForm = ref({ password: "", email: "" });

const onSignUp = () => {
  console.log({
    password: loginForm.value.password,
    email: loginForm.value.email,
  });
};
</script>

<style lang="scss" scoped>
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  min-width: 400px;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

input[type="submit"] {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
