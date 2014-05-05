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
background.src = 'taustaa2.png';
var gameHeight = c.height;
var gameWidth = c.width;
var sx=0;
var sy=0;
//Liitetään myöhemmin car luokkaan
var audi = new Image();
audi.src = "audiR8auto.png";
auto = new car("audiR8auto.png");
var rengas = new Image();
rengas.src = "audiR8pyora.png";
//var hill1 = new smallHill(300)

// TODO: poista kun toiminnallisuudet kunnossa
var TO_RADIANS = Math.PI/180;

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
	ctx.drawImage(image, -(image.width/2), -(image.height/2));

	// and restore the co-ords to how they were when we began
	ctx.restore();
}

//funktiot piirretty kuvaan http://www.onlinefunctiongrapher.com/

function isOnHighHill() { //sin(2x)
	if((sx >= 2000 && sx <= 2300)){
		return true
	} else {
         return false
	}
}

function isOnBasicHill() { //0.5sin()2x
	if((sx >= 350+83 && sx <= 750+83) || (sx >= 1500 && sx <= 1900)){
		return true
	} else {
         return false
	}
}

function isOnLongHill() { //0.5sinx
	if((sx > 800 && sx < 1350)) {
		return true
	} else {
         return false
	}
}

// Animation loop
function animate(time) {
	// Calculate time elapsed from the last tick (time-based motion)
	delta = time - lastTime;


	// Draw objects
	if (delta > interval) {
	ctx.drawImage(background,sx,sy,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	ctx.drawImage(audi, 5, 365);


    if(sx >= 350-93 && sx <= 750+93){	
    	var cw = 400, xh = 400;
        var oy = 360;
        var t_min = 0, t_max = 2*Math.PI;
        var scale = 80, step = 400, inc = t_max/step;
        
        var t1 = t_min+(sx-350-16)*inc
        var t2 = t_min+(sx-350-83)*inc
    	var y1 = -scale*0.5 * Math.cos(t1);
    	var x1 = (t1 / t_max) * cw;
    	var y2 = -scale*0.5 * Math.cos(t2);
    	var x2 = (t2 / t_max) * cw;
    

        drawRotatedImage(rengas, x1, y1+oy-23,sx);
	    drawRotatedImage(rengas, x2, y2+oy-23,sx);
    } else {
        drawRotatedImage(rengas, 5 +16, 365 +23,sx);
	    drawRotatedImage(rengas, 5 +83, 365 +23,sx);
    }
    

//http://jsdo.it/debiru/sf3B

	/*ctx.strokeStyle = "#FF0000";

	 for (var i = 50; i < 230; i++) {
    	ctx.moveTo(i, 400);
        ctx.lineTo(i, Math.sin(i*200-50)*100+400);
    	ctx.stroke();
    }*/


//HihgHill määrittely on tässä: 

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
  

  //BasicHill määrittely on tässä: 

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


  //LowHill määrittely on tässä: 

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


		sx = sx+auto.speed;
	//TODO: renkaiden pyörimisnopeus

        //hill1.draw();
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
