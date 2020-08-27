<template>
  <div class="hello">
    <div id="adel-container">
      <figure id="adel-figure">
        <noscript>
          <!-- fallback -->
          Um, well this is awkward. Your browser doesn't wanna play this video. <br> Try again on a newer browser
          or
          enable JavaScript, cheers. <br></noscript>
        <video
          id="adel-video"
          controls
        >
          <source
            src="/video/videofallback.ogg"
            type="video/ogg"
          >
        </video>
        <!-- Custom controls -->
        <ul
          id="adel-controls"
          class="cust-controls"
        >
          <li><button
              id="adel-playpause"
              type="button"
            >Play/Pause</button></li>
          <li><button
              id="adel-mute"
              type="button"
            >Mute/Unmute</button></li>
          <li><button
              id="adel-volinc"
              type="button"
            >Vol+</button></li>
          <li><button
              id="adel-voldec"
              type="button"
            >Vol-</button></li>
          <li><button
              id="adel-fullscreen"
              type="button"
            >Fullscreen</button></li>
        </ul>
      </figure>
    </div>
  </div>
</template>

<script>
import { initAdelaide, initAdelControls } from '../js/adelaide.js'
export default {
  name: 'Adelaide',
  props: {
    srcURL: String
  },
  async mounted () {
    await initAdelaide(this.srcURL);
    await initAdelControls();
  }
}
</script>

<style scoped>
video::-webkit-media-controls {
  display: none !important;
}
.cust-controls {
  z-index: 2147483647;
  margin: auto;
}

li {
  display: inline;
  float: left;
}
</style>
