var TO_RADIANS = Math.PI / 180;
var n = 0;
var smallHill = false;
var smallHillAngle = 29.7 * TO_RADIANS;
var alpha = 0;
function car(src) {
	this.speed = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.gear = 1;
	this.locationx = 73;
	this.locationy = 383;
	this.kierrokset = 0;
	this.src = src;
	this.topspeed = 20;
	this.rengas1x = 73 -33;
	this.rengas2x = 73 + 33;
	this.rengas1y = 383 + 9;
	this.rengas2y = 383 + 9;
	this.rengas1Alpha = 0;
	this.rengas2Alpha = 0;
}

car.prototype.accelerate = function() {
	/*
	 * Kiihdyttï¿½minen ja vaihteen vaihtaminen
	 */
	if (this.gear < 1)
		this.gear = 1;
	if (this.gear > 2.6)
		this.gear = 2.5;
	this.topspeed = 20 * this.gear;
	if (this.speed < this.topspeed) {
		this.speed = this.speed + 1;
	} else {
		this.speed = this.topspeed + 1;
	}
};

car.prototype.changeGear = function(side) {
	switch(side) {
		case 'up':
			this.gear = this.gear + 0.3;
			break;

		case 'down':
			this.gear = this.gear - 0.3;
			break;
		/*
		 * Vaihteen vaihtaminen
		 */
	}

};
car.prototype.update = function(img) {
	var gameOver = false;



	// Maalinpaikka
	if (sx >= 700 && n == 0) {
		gameOver = true;
	}
	//Firebase muutos
	if (gameOver) {
		goal(scoreRef, "Atte", endTime);
		n = 1;
	}
	if (smallHill) {

		if (sx > 300 + 40  && sx < 240 + 226+ 10) {
			this.rengas1Alpha = 29.7 * TO_RADIANS;
		}
		if (sx > 240 + 226+ 10 && sx < 290 + 264 + 10) {
			this.rengas1Alpha = 0;
		}
		if (sx > 290 + 264+ 10 && sx < 700+ 10) {
			this.rengas1Alpha = (360 - 29.7) * TO_RADIANS;

		}
		if (sx > 300  - 10 && sx < 240 + 226- 10) {
			this.rengas2Alpha = 29.7 * TO_RADIANS;
		}
		if (sx > 240 + 226-33 && sx < 290 + 264-33) {
			this.rengas2Alpha = 0;
		}
		if (sx > 290 + 264-33 && sx < 700-33) {
		this.rengas2Alpha= (360 - 29.7) * TO_RADIANS;

		}

	}
	dy = this.rengas1y - this.rengas2y;
	dx = this.rengas1x - this.rengas2x;
	theta = Math.atan2(dy, dx);
	//theta *= 360 / Math.PI;
	this.speedX = this.speed * Math.cos(alpha);
	this.speedY = -Math.sin(alpha) * this.speed;
	this.rengas2y = this.rengas2y -Math.sin(this.rengas2Alpha) * this.speed;
	this.rengas1y = this.rengas1y -Math.sin(this.rengas1Alpha) * this.speed;
	this.rengas2x = this.rengas2x - this.speedX + this.speed * Math.cos(this.rengas2Alpha);
	this.rengas1x = this.rengas1x - this.speedX + this.speed * Math.cos(this.rengas1Alpha);
	this.locationy = (this.rengas2y+this.rengas1y)/2 - 9;
	this.locationx = (this.rengas2x) - 33;

	drawRotatedImage(rengas, this.rengas2x, this.rengas2y, sx);
	drawRotatedImage(rengas, this.rengas1x, this.rengas1y, sx);
	drawRotatedImage(img, this.locationx, this.locationy, Math.PI+theta);
	this.rengas1Alpha = 0;
	this.rengas2Alpha = 0;
	alpha = 0;
};
car.prototype.brake = function() {
	/*
	 * Hidastaminen
	 */
	if (this.speed > 0) {
		this.speed = this.speed - 1;
	} else {
		this.speed = -3;
	}
};
