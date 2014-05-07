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
var oldX1 = 0;
var oldX2 = 0;
var oldY1 = 0;
var oldY2 = 0;

var audi = new Image();
audi.src = "audiR8auto.png";
auto = new car("audiR8auto.png");
plane = new plane("pinempiLentokone.png");
var lentokone  = new Image();
lentokone.src=plane.src;
var rengas = new Image();
rengas.src = "audiR8pyora.png";
var vaihdekuva = new Image();
vaihdekuva.src = "vaihde1.png";
var mittari = new Image();
mittari.src = "mittari0.png";
var watch = false;
var startTime;
var endTime;

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



// Animation loop
function animate(time) {
	// Calculate time elapsed from the last tick (time-based motion)
	delta = time - lastTime;

	// Draw objects
	if (delta > interval) {

	ctx.drawImage(background,sx,sy,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	auto.update(audi);
	plane.update(lentokone);
	endTime = new Date() - startTime;
    ctx.font = "20px Georgia";
		ctx.fillText(auto.speed, 10, 50);
		ctx.fillText(endTime, 10, 80);
        ctx.drawImage(vaihdekuva, 695, 5);
	     ctx.drawImage(mittari, 540, -32);


        if(sx+83+15 >= 400 && sx+83 <= 800 && sx+23+15 >= 400 && sx+23 <= 800){
        	piirraPyoraBasicHill(400, sx+83+15, 2);
        	piirraPyoraBasicHill(400, sx+23+15, 1);
        } else if(sx+83+15 >= 400 && sx+83 <= 800){
        	piirraPyoraBasicHill(400, sx+83+15, 2);
        } else if(sx+23+15 >= 400 && sx+23 <= 800){
        	piirraPyoraBasicHill(400, sx+23+15, 1);
        } else {
        	drawRotatedImage(rengas, auto.rengas1x, auto.rengas1y, sx);
		    drawRotatedImage(rengas, auto.rengas2x, auto.rengas2y, sx);
		    sx = sx + auto.speed;
        }
        






//http://jsdo.it/debiru/sf3B


//HihgHill mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤rittely on tÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ssÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤:

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


  //BasicHill mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤rittely on tÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ssÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤:

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


  //LowHill mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤rittely on tÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ssÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤:

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



		//TODO: renkaiden pyÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½rimisnopeus

		//hill1.draw();
		lastTime = time - (delta % interval);

		piirraVaihdemittari();
        piirraNopeusmittari();

	}

	// Continue animation loop
	aniFrame = requestAnimationFrame(animate);
}

function piirraPyoraBasicHill(maenAlku, xPyora, pyoranNro) {
  var cw = 400, xh = 400;
  var ox = 350, oy = 360;
  var t_min = 0, t_max = 2*Math.PI;
  var scale = 80, step = 400, inc = t_max/step;
  var kokSpeed  = auto.speed*0.7;
  var uusiNopeus = xPyora-kokSpeed;

        var t1 = t_min+(uusiNopeus-maenAlku)*inc
    	var y1 = -scale*0.5 * Math.cos(t1);
    	var x1 = (t1 / t_max) * cw;


        if(pyoranNro == 1 ){
        	 drawRotatedImage(rengas, 13+23, oy-y1,uusiNopeus);
        } else {
        	drawRotatedImage(rengas, 13+83+23, oy-y1,uusiNopeus);
        }
        
        sx = sx+(auto.speed-kokSpeed);

        /*
        
        
        if(pyoranNro == 1 ){
        	 drawRotatedImage(rengas, 13+23, oy-y1,sx);
        } else {
        	drawRotatedImage(rengas, 13+83+23, oy-y1,sx);
        }
        for(var i=1; i<=auto.speed; i+=1){
        	var t2 = t_min+(sx + i -maenAlku)*inc
    	    var y2 = -scale*0.5 * Math.cos(t1);
    	    var x2 = (t1 / t_max) * cw;
    	    console.log(Math.sqrt(i^2+(y2-y1)^2));
    	    console.log(auto.speed);
        	if(Math.sqrt(i^2+(y2-y1)^2)==auto.speed){
        		sx = sx+i;
        		return; 
        	}
        }
        
}
        */
}

function piirraPyoraLowHill(maenAlku, xPyora) {
        var t_min = 0, t_max = 2*Math.PI;
        var scale = 50, step = 200, inc = t_max/step;

        var t1 = t_min+(xPyora-maenAlku)*inc
    	var y1 = -scale*0.5 * Math.cos(t1);
    	var x1 = (t1 / t_max) * cw;


        //tÃ¤hÃ¤n vaiheen mÃ¤Ã¤rittely ja nopeuden lasku
        drawRotatedImage(rengas, x1, y1+oy,xPyora);
}

function piirraPyoraHighHill(maenAlku, xPyora) {

  var t_min = 0, t_max = 2*Math.PI;
  var scale = 150, step = 200, inc = t_max/step;

        var t1 = t_min+(xPyora-maenAlku)*inc
    	var y1 = -scale*0.5 * Math.cos(t1);
    	var x1 = (t1 / t_max) * cw;


        //tÃ¤hÃ¤n vaiheen mÃ¤Ã¤rittely ja nopeuden lasku
        drawRotatedImage(rengas, x1, y1+oy,xPyora);
}

function piirraVaihdemittari() {
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

}

function piirraNopeusmittari() {
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
		if(watch == false){
		startTime= new Date();

		watch = true;
		}
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