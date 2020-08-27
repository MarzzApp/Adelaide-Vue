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
            ><i
                id="adel-playpause-icon"
                class="material-icons"
              >play_circle_filled</i></button></li>
          <li><button
              id="adel-mute"
              type="button"
            ><i
                id="adel-mute-icon"
                class="material-icons"
              >volume_off</i></button></li>
          <li><button
              id="adel-volinc"
              type="button"
            ><i
                id="adel-volinc-icon"
                class="material-icons"
              >volume_up</i></button></li>
          <li><button
              id="adel-voldec"
              type="button"
            ><i
                id="adel-voldec-icon"
                class="material-icons"
              >volume_down</i></button></li>
          <li><button
              id="adel-fullscreen"
              type="button"
            ><i
                id="adel-fullscreen-icon"
                class="material-icons"
              >fullscreen</i></button></li>
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
  /* z-index: 2147483647; */
  width: 80%;
  margin: auto;
}

li {
  display: inline;
  float: left;
}

#adel-figure {
  position: relative;
}

#adel-controls {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2px;
}
video {
  width: 100% !important;
  height: auto !important;
}
#adel-container {
  width: 100vw;
}
</style>
