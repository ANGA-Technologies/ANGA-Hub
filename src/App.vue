<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HomePage msg="Welcome to Your Vue.js App"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  /* background: radial-gradient(#8A2BE2, #040828);
  height: 100vh;
  width: 100vw; */
}
</style>
