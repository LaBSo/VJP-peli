var fps = 1;
var interval = 1000/fps;
var delta;
var k =0;
var aniFrame;
var elapsedTime;
var lastTime = 0;
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var background = new Image();
// Animation loop
function animate(time) {
	// Calculate time elapsed from the last tick (time-based motion)
	delta = time - lastTime;



	// Draw objects
	if (delta > interval) {

		// Store the time when this tick was started
		lastTime = time - (delta % interval);

	}




	// Continue animation loop
	aniFrame = requestAnimationFrame(animate);
}


$(document).ready(function() {
	// Start animation
	if (requestAnimationFrame) {
		aniFrame = requestAnimationFrame(animate);
	}
});
