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
background.src = 'Tausta.jpg';
var gameHeight = c.height;
var gameWidth = c.width;
var sx=0;
var sy=0;
//Liitetään myöhemmin car luokkaan
var auto = new Image();
auto.src = "audi_profiili.png";
// Animation loop
function animate(time) {
	// Calculate time elapsed from the last tick (time-based motion)
	delta = time - lastTime;



	// Draw objects
	if (delta > interval) {
	ctx.drawImage(background,sx,sy,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	ctx.drawImage(auto, 69, 325);
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
