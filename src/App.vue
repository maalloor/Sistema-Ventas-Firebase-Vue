<template>
  <h1>Práctica Firebase - Vue</h1>
</template>

<script>
import { onMounted } from "vue";
import { auth } from "./firebase";
export default {
  name: 'App',
  setup()
  {
    onMounted(()=> {
      auth.onAuthStateChanged((user) => {
        if (user)
        {
          console.log("Login");
        }
        else
        {
          console.log("No Login");
        }
      });
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
