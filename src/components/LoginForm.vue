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
    Don't have account?
    <a href="#" @click="props.changeStep('signup')">Sign Up</a>
  </form>
</template>

<script setup>
import { auth } from "@/firebase/init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, defineProps } from "vue";
const loginForm = ref({ password: "", email: "" });

const props = defineProps({
  changeStep: Function,
});

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const onSignUp = () => {
  //   console.log({
  //     password: loginForm.value.password,
  //     email: loginForm.value.email,
  //   });
  signInWithEmailAndPassword(
    auth,
    loginForm.value.email,
    loginForm.value.password
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user.token) {
        setCookie("firebase_token", user.token, 3);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// onMounted(() => {
//   console.log(setCookie);
// });
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
