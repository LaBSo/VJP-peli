var fps = 24;
var interval = 1000 / fps;
var delta;
var k = 0;
var aniFrame;
var elapsedTime;
var lastTime = 0;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var background = new Image();
background.src = 'taustaa3.png';
var gameHeight = c.height;
var gameWidth = c.width;
var sx = 0;
var sy = 0;
var oldSx1 = 0;
var oldSx2 = 0;
var oldSy1 = 0;
var oldSy2 = 0;
//LiitetÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½n myÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½hemmin car luokkaan
var audi = new Image();
audi.src = "audiR8auto.png";
auto = new car("audiR8auto.png");
plane = new plane("lentokone.png");
var lentokone  = new Image();
lentokone.src=plane.src;
var rengas = new Image();
rengas.src = "audiR8pyora.png";
var vaihdekuva = new Image();
vaihdekuva.src = "vaihde1.png";
var mittari = new Image();
mittari.src = "mittari0.png";



// TODO: poista kun toiminnallisuudet kunnossa
var TO_RADIANS = Math.PI / 180;

function drawRotatedImage(image, x, y, angle) {

	// save the current co-ordinate system
	// before we screw with it
	ctx.save();

	// move to the middle of where we want to draw our image
	ctx.translate(x, y);

	// rotate around that point, converting our
	// angle from degrees to radians
	ctx.rotate(angle * TO_RADIANS);

	// draw it up and to the left by half the width
	// and height of the image
	ctx.drawImage(image, -(image.width / 2), -(image.height / 2));

	// and restore the co-ords to how they were when we began
	ctx.restore();
}

//funktiot piirretty kuvaan http://www.onlinefunctiongrapher.com/

function isOnHighHill() {//sin(2x)
	if ((sx >= 200 && sx <= 400) || (sx >= 610 && sx <= 790)) {
		return true;
	} else {
		return false;
	}
}

function isOnBasicHill() { //0.5sin()2x
	if((sx >= 350+83 && sx <= 750+83) || (sx >= 1500 && sx <= 1900)){

		return true;
	} else {
		return false;
	}
}

function isOnLongHill() {//0.5sinx
	if ((sx > 990 && sx < 1340) || (sx >= 1840 && sx <= 2190)) {
		return true;
	} else {
		return false;
	}
}

// Animation loop
function animate(time) {
	// Calculate time elapsed from the last tick (time-based motion)
	delta = time - lastTime;

	// Draw objects
	if (delta > interval) {

	ctx.drawImage(background,sx,sy,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	auto.update(audi);
	plane.update(lentokone);

    ctx.font = "20px Georgia";
		ctx.fillText(auto.speed, 10, 50);

		drawRotatedImage(rengas, auto.rengas1x, auto.rengas1y, sx);
		drawRotatedImage(rengas, auto.rengas2x, auto.rengas2y, sx);
         ctx.drawImage(vaihdekuva, 695, 5);

	     ctx.drawImage(mittari, 540, -32);


		sx = sx + auto.speed;

//http://jsdo.it/debiru/sf3B


//HihgHill mÃƒÆ’Ã‚Â¤ÃƒÆ’Ã‚Â¤rittely on tÃƒÆ’Ã‚Â¤ssÃƒÆ’Ã‚Â¤:

  /*var cw = 300, xh = 400;
  var ox = 350, oy = 326;
  var t_min = 0, t_max = 2*Math.PI;
  var scale = 150, step = 200, inc = t_max/step;

 ctx.strokeStyle = "#565660";
  ctx.beginPath();
  ctx.moveTo(ox+(t_min/t_max)*cw, oy-(scale*Math.cos(t_min)));
  for (var t=t_min; t<=t_max; t+=inc){
    y = -scale*0.5 * Math.cos(t);
    x = (t / t_max) * cw;
    ctx.lineTo(ox+x, oy-y);
  }
  ctx.stroke();
  ctx.closePath();*/


  //BasicHill mÃƒÆ’Ã‚Â¤ÃƒÆ’Ã‚Â¤rittely on tÃƒÆ’Ã‚Â¤ssÃƒÆ’Ã‚Â¤:

  /*var cw = 400, xh = 400;
  var ox = 350, oy = 360;
  var t_min = 0, t_max = 2*Math.PI;
  var scale = 80, step = 200, inc = t_max/step;

 ctx.strokeStyle = "#565660";
  ctx.beginPath();
  ctx.moveTo(ox+(t_min/t_max)*cw, oy-(scale*Math.cos(t_min)));
  for (var t=t_min; t<=t_max; t+=inc){
    y = -scale*0.5 * Math.cos(t);
    x = (t / t_max) * cw;
    ctx.lineTo(ox+x, oy-y);
  }
  ctx.stroke();
  ctx.closePath();*/


  //LowHill mÃƒÆ’Ã‚Â¤ÃƒÆ’Ã‚Â¤rittely on tÃƒÆ’Ã‚Â¤ssÃƒÆ’Ã‚Â¤:

  /*var cw = 550, xh = 400;
  var ox = 200, oy = 375;
  var t_min = 0, t_max = 2*Math.PI;
  var scale = 50, step = 200, inc = t_max/step;

 ctx.strokeStyle = "#565660";
  ctx.beginPath();
  ctx.moveTo(ox+(t_min/t_max)*cw, oy-(scale*Math.cos(t_min)));
  for (var t=t_min; t<=t_max; t+=inc){
    y = -scale*0.5 * Math.cos(t);
    x = (t / t_max) * cw;
    ctx.lineTo(ox+x, oy-y);
  }
  ctx.stroke();
  ctx.closePath();*/




		/*ctx.drawImage(background, sx, sy, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
		ctx.drawImage(audi, 5, 365);
		//ctx.drawImage(audi, 69, 325);
		ctx.font = "20px Georgia";
		ctx.fillText(auto.speed, 10, 50);*/


		sx = sx + auto.speed;
		//TODO: renkaiden pyÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½rimisnopeus

		//hill1.draw();
		lastTime = time - (delta % interval);

				if(auto.gear == 1){
			vaihdekuva.src = "vaihde1.png";	
		} else if(auto.gear == 1.3){
			vaihdekuva.src = "vaihde2.png";
		} else if(auto.gear == 1.6){
			vaihdekuva.src = "vaihde3.png";
		} else if(auto.gear == 1.9){
			vaihdekuva.src = "vaihde4.png";
		} else if(auto.gear == 2.2){
			vaihdekuva.src = "vaihde5.png";
		}
		ctx.drawImage(vaihdekuva, 695, 5);

		if (auto.speed == 0){
            mittari.src = "mittari0.png";
		} else if(auto.speed <= 3){
			mittari.src = "mittari1.png";	
		} else if(auto.speed <= 5){
			mittari.src = "mittari2.png";
		} else if(auto.speed <= 8){
			mittari.src = "mittari3.png";
		} else if(auto.speed <= 10){
			mittari.src = "mittari4.png";
		} else if(auto.speed <= 13){
			mittari.src = "mittari5.png";
		} else if(auto.speed <= 15){
			mittari.src = "mittari6.png";
		} else if(auto.speed <= 18){
			mittari.src = "mittari7.png";
		} else if(auto.speed <= 20){
			mittari.src = "mittari8.png";
		} else if(auto.speed <= 23){
			mittari.src = "mittari9.png";
		} else if(auto.speed <= 25){
			mittari.src = "mittari10.png";
		} else if(auto.speed <= 28){
			mittari.src = "mittari11.png";
		} else if(auto.speed <= 30){
			mittari.src = "mittari12.png";
		} else if(auto.speed <= 33){
			mittari.src = "mittari13.png";
		} else if(auto.speed <= 35){
			mittari.src = "mittari14.png";
		} else if(auto.speed <= 38){
			mittari.src = "mittari15.png";
		} else if(auto.speed <= 40){
			mittari.src = "mittari16.png";
		} else if(auto.speed <= 43){
			mittari.src = "mittari17.png";
		} else if(auto.speed <= 45){
			mittari.src = "mittari18.png";
		} else if(auto.speed <= 48){
			mittari.src = "mittari19.png";
		}else if(auto.speed <= 50){
			mittari.src = "mittari20.png";
		} else if(auto.speed <= 60){
			mittari.src = "mittari21.png";
		} 

		ctx.drawImage(mittari, 540, -32);

	}

	// Continue animation loop
	aniFrame = requestAnimationFrame(animate);
}

function piirraPyoraLowHill(maenAlku, xPyöra) {
        var t_min = 0, t_max = 2*Math.PI;
        var scale = 80, step = 400, inc = t_max/step;


        var t1 = t_min+(xPyöra-maenAlku)*inc
    	var y1 = -scale*0.5 * Math.cos(t1);
    	var x1 = (t1 / t_max) * cw;

        //tähän vaiheen määrittely ja nopeuden lasku
        drawRotatedImage(rengas, x1, y1+oy,xPyöra);
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
	if (keyID === 38 || keyID === 87) {//up arrow or W key
		e.preventDefault();
		auto.changeGear('up');
	}
	if (keyID === 39 || keyID === 68) {//right arrow or D key
		e.preventDefault();
		auto.accelerate();

	}
	if (keyID === 40 || keyID === 83) {//down arrow or S key
		e.preventDefault();
		auto.changeGear('down');
	}
	if (keyID === 37 || keyID === 65) {//left arrow or A key
		e.preventDefault();
		auto.brake();
	}
}

function checkKeyUp(e) {
	var keyID = (e.keyCode) ? e.keyCode : e.which;
	if (keyID === 38 || keyID === 87) {//up arrow or W key
		e.preventDefault();
	}
	if (keyID === 39 || keyID === 68) {//right arrow or D key
		e.preventDefault();

	}
	if (keyID === 40 || keyID === 83) {//down arrow or S key
		e.preventDefault();
	}
	if (keyID === 37 || keyID === 65) {//left arrow or A key
		e.preventDefault();
	}
}