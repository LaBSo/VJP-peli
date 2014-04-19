function car(src) {
	this.speed = 0;
	this.gear = 1;
	this.location
	this.kierrokset
	this.src = src;
	this.topspeed = 20;
}

car.prototype.accelerate = function() {
	/*
	 * Kiihdyttäminen ja vaihteen vaihtaminen
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
			console.log(this.topspeed);
			console.log(this.gear);
			break;

		case 'down':
			this.gear = this.gear - 0.3;
			console.log("alas");
			console.log(this.topspeed);
			console.log(this.gear);
			break;
		/*
		 * Vaihteen vaihtaminen
		 */
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
// function update {
/*
 * Hidastaminen
 */

