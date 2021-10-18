// Options
const outputEl = document.getElementById('fps-output');
const decimalPlaces = 0;
const updateEachSecond = 2;

// Cache values
const decimalPlacesRatio = Math.pow(10, decimalPlaces);
let timeMeasurements = [];

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

// Final output
let fps = 0;

function GetFrameFinal () {

if(fps>400){

unityInstance.SendMessage("JsHandle", "FrameON");

}else{

unityInstance.SendMessage("JsHandle", "FrameOFF");

}
}

const tick = function() {

timeMeasurements.push(performance.now());

const msPassed = timeMeasurements[timeMeasurements.length - 1] - timeMeasurements[0];

if (msPassed >= updateEachSecond * 1000) {

fps = Math.round(timeMeasurements.length / msPassed * 1000 * decimalPlacesRatio) / decimalPlacesRatio;
timeMeasurements = [];

if(fps>400){

//console.log("found ==> " + fps);

$.ajax({
type: "POST",
url: 'UpdateFrame.php',
data: 'Frame=true'
});

}else{

//console.log("Not found ==> " + fps);

}

outputEl.parentNode.removeChild(outputEl);

cancelAnimationFrame(() => {
tick();
});

}else{

requestAnimationFrame(() => {
tick();
});

}

outputEl.innerText = fps;

}

tick();
