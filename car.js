var TO_RADIANS = Math.PI / 180;
var n = 0;
var smallHill = false;
var smallHillAngle = 29.7 * TO_RADIANS;
var smallHillindex = 0;
var basicHill = false;
var basicHillindex = 0;
var basicHillAngle = 29.7 * TO_RADIANS;
var alpha = 0;
function car(src) {
	this.speed = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.gear = 1;
	this.locationx = 73;
	this.locationy = 383;
	this.kierrokset = 0;
	this.minspeed = -3;
	this.src = src;
	this.topspeed = 20;
	this.rengas1x = 73 - 33;
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
	if (!ohjeetAuki && !alkuKuvaAuki) {
		if (this.gear < 1)
			this.gear = 1;
		if (this.gear > 2.6)
			this.gear = 2.5;
		this.topspeed = 10 * this.gear;
		this.minspeed = 10 * (this.gear-0.3)
		if (this.speed < this.topspeed) {
			this.speed = this.speed + 1;
		} else {
			this.speed = this.topspeed + 1;
		}
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
	}

};
car.prototype.update = function(img) {
	var gameOver = false;


	if (basicHill) {

		if (sx > basicHills[basicHillindex] - 22 && sx < basicHills[basicHillindex] + 170 - 100 + 67) {
			this.rengas1Alpha = 29.7 * TO_RADIANS;
			if(auto.speed > 0.8 ){
				auto.speed = auto.speed-0.8;
			}


		}
		if (sx > basicHills[basicHillindex] + 170 - 100 + 67 && sx < basicHills[basicHillindex] + 236 + 10 + 67) {
			this.rengas1Alpha = 0;
			if(auto.speed >= 20){
				isOver = true;
			}
		}
		if (sx > basicHills[basicHillindex] + 236 - 100 + 67 && sx < basicHills[basicHillindex] + 236 - 100 + 148 + 80) {
			this.rengas1Alpha = (360 - 29.7) * TO_RADIANS;
			auto.speed = auto.speed + 0.8;

		}
		if (sx > basicHills[basicHillindex] - 80 && sx < basicHills[basicHillindex] + 170 - 100) {
			this.rengas2Alpha = 29.7 * TO_RADIANS;
		}
		if (sx > basicHills[basicHillindex] + 170 - 100 && sx < basicHills[basicHillindex] + 236 - 100) {
			this.rengas2Alpha = 0;
		}
		if (sx > basicHills[basicHillindex] + 236 - 100 && sx < basicHills[basicHillindex] + 236 - 100 + 148) {
			this.rengas2Alpha = (360 - 29.7) * TO_RADIANS;

		}
		if (sx > basicHills[basicHillindex] + 400 - 33) {
			basicHillindex++;
			basicHill = false;
			this.rengas1x = 73 - 33;
			this.rengas2x = 73 + 33;
			this.rengas1y = 383 + 9;
			this.rengas2y = 383 + 9;
		}
	}
	if (smallHill) {

		if (sx > lowHills[smallHillindex] - 20 && sx < lowHills[smallHillindex] + 226 + 20) {
			this.rengas1Alpha = 13.9 * TO_RADIANS;
			if(auto.speed > 0.5 ){
				auto.speed = auto.speed-0.5;
			}

		}
		if (sx > lowHills[smallHillindex] + 226 - 20 && sx < lowHills[smallHillindex] + 306 + 20) {
			this.rengas1Alpha = 0;
			if(auto.speed >= 30){
				isOver = true;
			}
		}
		if (sx > lowHills[smallHillindex] + 306 - 20 && sx < lowHills[smallHillindex] + 306 + 179 + 80) {
			this.rengas1Alpha = (360 - 13.9) * TO_RADIANS;
			auto.speed = auto.speed + 0.5;

		}
		if (sx > lowHills[smallHillindex] - 80 && sx < lowHills[smallHillindex] + 226 - 100) {
			this.rengas2Alpha = 13.9 * TO_RADIANS;
		}
		if (sx > lowHills[smallHillindex] + 226 - 100 && sx < lowHills[smallHillindex] + 306 - 100) {
			this.rengas2Alpha = 0;
		}
		if (sx > lowHills[smallHillindex] + 306 - 100 && sx < lowHills[smallHillindex] + 306 - 100 + 179) {
			this.rengas2Alpha = (360 - 13.9) * TO_RADIANS;

		}
		if (sx > lowHills[smallHillindex] + 500) {
			smallHillindex++;
			smallHill = false;
			this.rengas1x = 73 - 33;
			this.rengas2x = 73 + 33;
			this.rengas1y = 383 + 9;
			this.rengas2y = 383 + 9;
		}
	}

	dy = this.rengas1y - this.rengas2y;
	dx = this.rengas1x - this.rengas2x;
	theta = Math.atan2(dy, dx);
	//theta *= 360 / Math.PI;
	this.speedX = this.speed * Math.cos(this.rengas2Alpha);
	this.speedY = -Math.sin(alpha) * this.speed;
	this.rengas2y = this.rengas2y - Math.sin(this.rengas2Alpha) * this.speed;
	this.rengas1y = this.rengas1y - Math.sin(this.rengas1Alpha) * this.speed;
	this.rengas2x = this.rengas2x - this.speedX + this.speed * Math.cos(this.rengas2Alpha);
	this.rengas1x = this.rengas1x - this.speedX + this.speed * Math.cos(this.rengas1Alpha);
	this.locationy = ((this.rengas2y + this.rengas1y) / 2 - 9);
	if (this.rengas2Alpha > Math.PI) {
		this.locationx = (this.rengas2x) - 28;
	} else {
		this.locationx = (this.rengas2x) - 33;
	}
	drawRotatedImage(rengas, this.rengas2x, this.rengas2y, sx);
	drawRotatedImage(rengas, this.rengas1x, this.rengas1y, sx);
	drawRotatedImage(img, this.locationx, this.locationy, Math.PI + theta);
	this.rengas1Alpha = 0;
	this.rengas2Alpha = 0;
	alpha = 0;

};
car.prototype.brake = function() {
	/*
	 * Hidastaminen
	 */
	if (!ohjeetAuki && !alkuKuvaAuki) {
		if (this.speed > 0) {
			if (this.gear < 1)
				this.gear = 1;
			if (this.gear > 2.6)
				this.gear = 2.5;
				this.topspeed = 10 * this.gear;
				this.minspeed = 10 * (this.gear-0.3);
			if (this.speed > this.minspeed) {
				this.speed = this.speed - 1;
			}
		} else {
			this.speed = -3;
		}
	}
};
