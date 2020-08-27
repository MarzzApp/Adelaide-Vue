import Hls from './hls-scripts/hls.min.js';

// initializing Adelaide
export function initAdelaide(srcURL) {
    const videoDOM = document.getElementById('adel-video');
    const videoSrc = srcURL;
    // checking for MSE/HLS.js support
    if (Hls.isSupported()) {
        // HLS.js is supported, mount to our video player
        const hlsInst = new Hls();
        hlsInst.loadSource(videoSrc);
        hlsInst.attachMedia(videoDOM);
        hlsInst.on(Hls.Events.MANIFEST_PARSED, () => {
            // callback
            console.warn('hls.js is ready to play');
            console.log(`%c
                \     ^__^
                \     (^^)\\______
                    (oo)\\       )\\
                        ||----w |
                        ||     ||
                \nBessie says: enjoy the moooovie (or whatever you're watching)
                        `, "font-family:monospace")
        })

    } else if (videoDOM.canPlayType('application/vnd.apple.mpegurl')) {
        // hlsjs is not supported, HLS native support is
        videoDOM.src = videoSrc;
        videoDOM.addEventListener('loadedmetadata', () => {
            console.warn('hls NATIVE is ready to play');
            console.log(`%c
                \     ^__^
                \     (^^)\\______
                    (oo)\\       )\\
                        ||----w |
                        ||     ||
                \nBessie says: enjoy the moooovie (or whatever you're watching)
                        `, "font-family:monospace")
        })
    } else {
        console.error(`%c
                \     ^__^
                \     (vv)\\______
                    (oo)\\       )\\
                        ||----w |
                        ||     ||
                \nBessie is upset because Adelaide doesn't support this device
                        `, "font-family:monospace")
    }
}

// controls management

export function initAdelControls() {
    //checking for html5 video support
    const supportCheck = !!document.createElement('video').canPlayType;
    if (supportCheck) {
        // html5 is supported, continuing with contols mount
        // declaring vars
        const videoDOM = document.getElementById('adel-video');
        const videoContainer = document.getElementById('adel-figure');
        const videoControls = document.getElementById('adel-controls');
        // make controls look niceer
        videoContainer.style.display = 'block';
        // hide native controls
        videoDOM.controls = false;
        // contol vars
        const playpause = document.getElementById('adel-playpause');
        const playpauseico = document.getElementById('adel-playpause-icon');
        const mute = document.getElementById('adel-mute');
        const muteico = document.getElementById('adel-mute-icon');
        const volinc = document.getElementById('adel-volinc');
        const volincico = document.getElementById('adel-volinc-icon');
        const voldec = document.getElementById('adel-voldec');
        const voldecico = document.getElementById('adel-voldec-icon');
        const fullscreen = document.getElementById('adel-fullscreen');
        const fullscreenico = document.getElementById('adel-fullscreen-icon');
        // this one's a long one...
        const fullScreenCheck = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

        // hide fullscreen button should the browser be a bitch and not supporth the fs api
        if (!fullScreenCheck) {
            fullscreen.style.display = "none";
        }
        // set all icons to be white
        playpauseico.style.color = "white";
        muteico.style.color = "white";
        volincico.style.color = "white";
        voldecico.style.color = "white";
        fullscreenico.style.color = "white";
        // control bootstrapping complete, now we add our listeners
        // playpause listener
        playpause.addEventListener('click', (e) => {
            if (videoDOM.paused) {
                videoDOM.play();

            } else {
                videoDOM.pause();
                playpauseico.innerText = "play_circle_filled"
            }
        })

        // mute listener
        mute.addEventListener('click', (e) => {
            videoDOM.muted = !videoDOM.muted;
            if (videoDOM.muted) {
                muteico.innerText = "volume_down";
            } else {
                muteico.innerText = "volume_off";
            }
        })

        // volincrease listener
        volinc.addEventListener('click', (e) => {
            changeVol('+');
        })

        // vol decrease listener
        voldec.addEventListener('click', (e) => {
            changeVol('-');

        })

        // fullscreen listener
        fullscreen.addEventListener('click', (e) => {
            fullscreenHandler()
        })

        // volume alteration function
        const changeVol = function (directive) {
            // returns to us a workable value for the current volume
            const curVol = Math.floor(videoDOM.volume * 10) / 10;

            // determining what manipulation to run based on directive param
            if (directive === "+") {
                // checking if current volume is within media api range, we want less than 1
                if (curVol < 1) videoDOM.volume += 0.1;
            } else if (directive === '-') {
                // checking if current volume is within media api range, we want greater than 0
                if (curVol > 0) videoDOM.volume -= 0.1;
            }
        }
        const fullscreenHandler = function () {
            if (fullscreenState()) {
                // we're in fs mode, exit
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();

                setFullscreenData(false);
            } else {
                // request fs mode
                if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
                else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
                else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
                else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();

                setFullscreenData(true);
            }
        }

        // cross-engine fullscreen checker
        const fullscreenState = function () {
            // return fullscreen state
            return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
        }

        const setFullscreenData = function (state) {
            videoContainer.setAttribute('data-fullscreen', !!state);
            if (state) {
                fullscreenico.innerText = "fullscreen_exit";
            } else {
                fullscreenico.innerText = "fullscreen";
            }
        }

        // listen for state changes and set attr accordingly
        // fullscreen state
        document.addEventListener('fullscreenchange', function (e) {
            setFullscreenData(!!(document.fullscreen || document.fullscreenElement));
        });

        document.addEventListener('webkitfullscreenchange', function (e) {
            setFullscreenData(!!document.webkitIsFullScreen);
        });

        document.addEventListener('mozfullscreenchange', function (e) {
            setFullscreenData(!!document.mozFullScreen);
        });

        document.addEventListener('msfullscreenchange', function (e) {
            setFullscreenData(!!document.msFullscreenElement);
        });

        // play/pause state
        videoDOM.addEventListener('pause', (e) => {
            playpauseico.innerText = "play_circle_filled";
        });

        videoDOM.addEventListener('play', (e) => {
            playpauseico.innerText = "pause_circle_filled";
        });
    }
}