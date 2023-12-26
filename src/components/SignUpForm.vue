<template>
  <form @submit.self.prevent="onSignUp" class="signup-form">
    <input type="text" v-model="signUpForm.email" placeholder="Email" />
    <input
      type="password"
      v-model="signUpForm.password"
      placeholder="Password"
    />
    <input type="submit" value="Sign Up" />
    Have account? <a href="#" @click="props.changeStep('login')">Login</a>
  </form>
</template>

<script setup>
import { auth } from "@/firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, defineProps } from "vue";

const signUpForm = ref({ password: "", email: "" });

const props = defineProps({
  changeStep: Function,
});

const onSignUp = () => {
  createUserWithEmailAndPassword(
    auth,
    signUpForm.value.email,
    signUpForm.value.password
  )
    .then((credential) => {
      console.log(credential.user);
    })
    .catch((error) => {
      console.log(error);
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
