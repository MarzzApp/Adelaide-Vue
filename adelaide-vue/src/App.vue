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
button {
  background: none;
  border: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(./assets/MaterialIconsRound-Regular.otf);
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
</style>
