console.log("running");
UnityLoader.Error.handler = function(){

console.log("Error Happened !");

}
var unityInstance = UnityLoader.instantiate("gameContainer", "Build/2.0.1/Release/build2.0.1.json", {
onProgress: UnityProgress,
Module: {
onRuntimeInitialized: function() { UnityProgress(unityInstance, "complete") }
}
});
