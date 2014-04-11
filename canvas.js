var fps = 24;
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
var audi = new Image();
audi.src = "audi_profiili.png";
auto = new car("audi_profiili.png");
// TODO: poista kun toiminnallisuudet kunnossa




// Animation loop
function animate(time) {
	// Calculate time elapsed from the last tick (time-based motion)
	delta = time - lastTime;



	// Draw objects
	if (delta > interval) {
	ctx.drawImage(background,sx,sy,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	ctx.drawImage(audi, 69, 325);
		sx = sx+auto.speed;

		lastTime = time - (delta % interval);

	}




	// Continue animation loop
	aniFrame = requestAnimationFrame(animate);
}


$(document).ready(function() {

	//TODO: EventListerner
	document.addEventListener('keydown',checkKeyDown,false);
    document.addEventListener('keyup',checkKeyUp,false);
	// Start animation
	if (requestAnimationFrame) {
		aniFrame = requestAnimationFrame(animate);
	}
});

function checkKeyDown(e) {
    var keyID = (e.keyCode) ? e.keyCode : e.which;
    if (keyID === 38 || keyID === 87) { //up arrow or W key
        e.preventDefault();
    }
    if (keyID === 39 || keyID === 68) { //right arrow or D key
        e.preventDefault();
		auto.accelerate();

    }
    if (keyID === 40 || keyID === 83) { //down arrow or S key
        e.preventDefault();
    }
    if (keyID === 37 || keyID === 65) { //left arrow or A key
        e.preventDefault();
    }
}


function checkKeyUp(e) {
    var keyID = (e.keyCode) ? e.keyCode : e.which;
    if (keyID === 38 || keyID === 87) { //up arrow or W key
        e.preventDefault();
    }
    if (keyID === 39 || keyID === 68) { //right arrow or D key
        e.preventDefault();

    }
    if (keyID === 40 || keyID === 83) { //down arrow or S key
        e.preventDefault();
    }
    if (keyID === 37 || keyID === 65) { //left arrow or A key
        e.preventDefault();
    }
}
