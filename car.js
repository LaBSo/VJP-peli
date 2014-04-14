function car(src) {
	this.speed = 0;
	this.gear;
	this.location;
	this.kierrokset;
	this.src = src;
}

car.prototype.accelerate = function() {
	/*
	 * Kiihdyttäminen ja vaihteen vaihtaminen
	 */
	if (this.speed < 45) {
		this.speed = this.speed+1;
	} else {
		this.speed = 46;
	}
};

//
// function changeGear(side) {
// /*
// * Vaihteen vaihtaminen
// */
// }
//
car.prototype.brake = function() {
/*
* Hidastaminen
*/
	if (this.speed > 0) {
		this.speed = this.speed-1;
	} else {
		this.speed = 0;
	}
};
// function update {
/*
 * Hidastaminen
 */

