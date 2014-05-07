function car(src) {
	this.speed = 0;
	this.gear = 1;
	this.locationx = 73;
	this.locationy = 383;
	this.kierrokset
	this.src = src;
	this.topspeed = 20;
	this.rengas1x = this.locationx - 33;
	this.rengas2x = this.locationx + 33;
	this.rengas1y = this.locationy + 9;
	this.rengas2y = this.locationy + 9;
	
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
	dy = this.rengas1y - this.rengas2y;
	dx = this.rengas1x - this.rengas2x;
	theta = Math.atan2(dy, dx);
	theta *= 360 / Math.PI;
	drawRotatedImage(img, auto.locationx, auto.locationy, theta);

	// Maalinpaikka
	if (sx >= 700 && n==0) {
		gameOver = true;
	}
	//Firebase muutos
		if (gameOver) {
		goal(scoreRef, "Atte", endTime);
		console.log("TUlee tänne");
		n=1;
	}
};
car.prototype.brake = function() {
	/*
	 * Hidastaminen
	 */
	if (this.speed > 0) {
		this.speed = this.speed - 1;
	} else {
		this.speed = 0;
	}
};