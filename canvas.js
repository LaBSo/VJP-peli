var fps = 24;
var interval = 1000 / fps;
var delta;
var k = 0;
var aniFrame;
var elapsedTime;
var lastTime = 0;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var gameHeight = c.height;
var gameWidth = c.width;
var sx = 0;
var sy = 0;
var audi = new Image();
tausta = new tausta();
var lentokone = new Image();
var rengas = new Image();
var vaihdekuva = new Image();
var mittari = new Image();
var watch = false;
var startTime;
var endTime;
var ohjeet = new Image();
var alkuKuva = new Image();
var ohjeetAuki = false;
var alkuKuvaAuki = true;
var isOver = false;
var isGoal = false;
var valiKuolema = new Image();
var loppu = new Image();
var music = new Audio();
music.volume = 0.1;
var playerName;


window.onload = function() {
	ohjeet.src = "alkuOhje.PNG";
	alkuKuva.src = "ohjeTeksti.PNG";
	audi.src = "audiR8auto.png";
	auto = new car("audiR8auto.png");
	plane = new plane("pinempiLentokone.png");
	lentokone.src = plane.src;
	rengas.src = "audiR8pyora.png";
	vaihdekuva.src = "vaihde1.png";
	mittari.src = "mittari0.png";
	valiKuolema.src = "tieltasuistuminen.PNG";
	loppu.src = "loppuKuva.PNG";
	music.src = "venkoilu30s.mp3";
}


function drawRotatedImage(image, x, y, angle) {

	// save the current co-ordinate system
	// before we screw with it
	ctx.save();

	// move to the middle of where we want to draw our image
	ctx.translate(x, y);

	// rotate around that point, converting our
	// angle from degrees to radians
	ctx.rotate(angle );

	// draw it up and to the left by half the width
	// and height of the image
	ctx.drawImage(image, -(image.width / 2), -(image.height / 2));

	// and restore the co-ords to how they were when we began
	ctx.restore();
}

//funktiot piirretty kuvaan http://www.onlinefunctiongrapher.com/

// Animation loop
function animate(time) {
	// Calculate time elapsed from the last tick (time-based motion)
	delta = time - lastTime;
	if(ohjeetAuki || alkuKuvaAuki){
	newGame();
	}
	else{
	// Draw objects
	if (delta > interval) {


		//ctx.drawImage(background, sx, sy, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);


		if(!isOver && !isGoal){
			music.play();
			tausta.drawBackground(sx);
			auto.update(audi);
			plane.update(lentokone);
			endTime = new Date() - startTime;
			ctx.font = "20px Georgia";
			ctx.fillText(endTime, 10, 20);
			ctx.drawImage(vaihdekuva, 695, 5);
			ctx.drawImage(mittari, 540, -32);
			sx = sx + auto.speedX ;

			if(sx >=11800){
			isGoal = true;
			}

			lastTime = time - (delta % interval);

			piirraVaihdemittari();
			piirraNopeusmittari();
		} else {
			music.pause();
			if(isGoal){
				ctx.drawImage(loppu, 0, 0, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
				goal(scoreRef,playerName,endTime);
			} else {
				ctx.drawImage(valiKuolema, 0, 0, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
			}
		}


	}
	}
	// Continue animation loop
	aniFrame = requestAnimationFrame(animate);
}



function piirraVaihdemittari() {
	if (auto.gear == 1) {
		vaihdekuva.src = "vaihde1.png";
	} else if (auto.gear == 1.3) {
		vaihdekuva.src = "vaihde2.png";
	} else if (auto.gear == 1.6) {
		vaihdekuva.src = "vaihde3.png";
	} else if (auto.gear == 1.9000000000000001) {
		vaihdekuva.src = "vaihde4.png";
	} else if (auto.gear == 2.2) {
		vaihdekuva.src = "vaihde5.png";
	}
	ctx.drawImage(vaihdekuva, 695, 5);

}

function piirraNopeusmittari() {
	if (auto.speed == 0) {
		mittari.src = "mittari0.png";
	} else if (auto.speed <= 1) {
		mittari.src = "mittari1.png";
	} else if (auto.speed <= 3) {
		mittari.src = "mittari2.png";
	} else if (auto.speed <= 5) {
		mittari.src = "mittari3.png";
	} else if (auto.speed <= 7) {
		mittari.src = "mittari4.png";
	} else if (auto.speed <= 9) {
		mittari.src = "mittari5.png";
	} else if (auto.speed <= 11) {
		mittari.src = "mittari6.png";
	} else if (auto.speed <= 13) {
		mittari.src = "mittari7.png";
	} else if (auto.speed <= 15) {
		mittari.src = "mittari8.png";
	} else if (auto.speed <= 17) {
		mittari.src = "mittari9.png";
	} else if (auto.speed <= 19) {
		mittari.src = "mittari10.png";
	} else if (auto.speed <= 21) {
		mittari.src = "mittari11.png";
	} else if (auto.speed <= 23) {
		mittari.src = "mittari12.png";
	} else if (auto.speed <= 25) {
		mittari.src = "mittari13.png";
	} else if (auto.speed <= 27) {
		mittari.src = "mittari14.png";
	} else if (auto.speed <= 29) {
		mittari.src = "mittari15.png";
	} else if (auto.speed <= 31) {
		mittari.src = "mittari16.png";
	} else if (auto.speed <= 33) {
		mittari.src = "mittari17.png";
	} else if (auto.speed <= 35) {
		mittari.src = "mittari18.png";
	} else if (auto.speed <= 37) {
		mittari.src = "mittari19.png";
	} else if (auto.speed <= 39) {
		mittari.src = "mittari20.png";
	} else if (auto.speed <= 41) {
		mittari.src = "mittari21.png";
	}

	ctx.drawImage(mittari, 540, -32);
}


$(document).ready(function() {

	//TODO: EventListerner
	document.addEventListener('keydown', checkKeyDown, false);
	document.addEventListener('keyup', checkKeyUp, false);
	// Start animation
	if (requestAnimationFrame) {
		aniFrame = requestAnimationFrame(animate);
	}
});

function checkKeyDown(e) {
	var keyID = (e.keyCode) ? e.keyCode : e.which;
	if (keyID === 38 ) {//up arrow or W key
		e.preventDefault();
		auto.changeGear('up');
	}
	if (keyID === 39 	) {//right arrow or D key
		e.preventDefault();
		auto.accelerate();
		if (watch == false) {
			startTime = new Date();

			watch = true;
		}
	}
	if (keyID === 40 ) {//down arrow or S key
		e.preventDefault();
		auto.changeGear('down');
	}
	if (keyID === 37 ) {//left arrow or A key
		e.preventDefault();
		auto.brake();
	}
}

function checkKeyUp(e) {
	var keyID = (e.keyCode) ? e.keyCode : e.which;
	if (keyID === 38 ) {//up arrow or W key
		e.preventDefault();
	}
	if (keyID === 39 ) {//right arrow or D key
		e.preventDefault();

	}
	if (keyID === 40 ) {//down arrow or S key
		e.preventDefault();
	}
	if (keyID === 37 ) {//left arrow or A key
		e.preventDefault();
	}
}

function askName() {
	var person = window.prompt("Anna nimesi.", "");
    	if (person!=""){
  			playerName = person;
  		} else {
  			askName();
  		}
}

$(document).click(function(event) {
    if(alkuKuvaAuki){
    	alkuKuvaAuki = false;
    	ohjeetAuki = true;
    	askName();

    } else if(ohjeetAuki){
    	ohjeetAuki = false;
    	aniFrame = requestAnimationFrame(animate);
    } 

});

function newGame() {

	if(alkuKuvaAuki){
	ctx.drawImage(alkuKuva, 0, 0, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
	}
	if(ohjeetAuki){
		ctx.drawImage(ohjeet, 1, 1, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
	}

}