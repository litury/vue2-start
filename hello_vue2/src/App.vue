<template>
  <div id="app">
    <Rectangle/>
    <Rectangle/>
  </div>
</template>

<script>
import Rectangle from './components/Rectangle.vue'

export default {
  name: 'App',
  components: {
    Rectangle
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
  margin-top: 60px;
}
</style>
