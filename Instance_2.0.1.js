console.log("running");
UnityLoader.Error.handler = function(){

console.log("Error Happened !");

}
var unityInstance = UnityLoader.instantiate("gameContainer", "https://raw.githubusercontent.com/zackiscool000/RushTeamGameThing/main/build2.0.1.json", {
onProgress: UnityProgress,
Module: {
onRuntimeInitialized: function() { UnityProgress(unityInstance, "complete") }
}
});
