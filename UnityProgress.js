function UnityProgress(gameInstance, progress) {
	
  if (!gameInstance.Module)
    return;


  if (!gameInstance.progress) {    
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
	
	gameInstance.progress.style.width = "250px";
	
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
	
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);
	
	gameInstance.progress.space = document.createElement("br");
	gameInstance.progress.appendChild(gameInstance.progress.space);

	gameInstance.progress.messageArea = document.createElement("p");
	gameInstance.progress.messageArea.className = "message";
	gameInstance.progress.messageArea.align = "center";
	gameInstance.progress.messageArea.style.color = "#FFFFFF";
	gameInstance.progress.messageArea.innerHTML = "Loading The Game ...";
	gameInstance.progress.appendChild(gameInstance.progress.messageArea);
	
	gameInstance.container.appendChild(gameInstance.progress);
  }
  
  gameInstance.progress.style.top = 520 + 'px';

  if (progress > 0 && progress < 0.9){
	  
	  gameInstance.progress.full.style.width = (100 * progress) + "%";
	  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
	  gameInstance.progress.messageArea.innerHTML = "Loading " +  Math.round((100 * progress)) + " %";

  } else if (progress == 1) {
	  
	  gameInstance.progress.full.style.width = (100 * progress) + "%";
	  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
	  gameInstance.progress.messageArea.innerHTML = "Starting The Game Please Wait ...";
	  
  } else if (progress >= 0.9){
	  
	  gameInstance.progress.full.style.width = (100) + "%";
	  gameInstance.progress.empty.style.width = (100 * (0)) + "%";
	  gameInstance.progress.messageArea.innerHTML = "Starting The Game Please Wait ...";

	  
  } else if (progress === "complete") {
	  
	gameInstance.progress.style.display = "none";
	
  }

}
