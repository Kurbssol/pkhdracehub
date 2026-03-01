// Initialize VideoJS Player
var player = videojs('pkhd-player');

// Load Stream Function
function loadStream(url){

let type = "application/x-mpegURL";

// Detect TS streams
if(url.includes(".ts")){
type = "video/mp2t";
}

player.src({
src: url,
type: type
});

player.play();
}

// Auto load default stream on page open
loadStream("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");