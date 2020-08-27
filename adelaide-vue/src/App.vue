<template>
  <div id="app">
    <Adelaide srcURL="https://playertest.longtailvideo.com/adaptive/artbeats/manifest.m3u8" />
  </div>
</template>

<script>
import Adelaide from './components/Adelaide.vue'

export default {
  name: 'App',
  components: {
    Adelaide
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
