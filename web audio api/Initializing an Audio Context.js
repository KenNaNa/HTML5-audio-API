var contextClass = (window.AudioContext || 
		window.webkitAudioContext ||
		window.mozAudioContext || 
		window.oAudioContext ||
		window.msAudioContext
	);

if(contextClass){
	var context = new contextClass();
}else{
	
}