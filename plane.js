function plane(src) {
        this.speed = 0;
        this.locationx = -15;
        this.locationy = 200;
        this.src = src;
        this.topspeed = 30;
}
plane.prototype.update = function(img) {

	if(this.speed < auto.speed +1){
		if( this.speed <this.topspeed){
		this.speed = this.speed +2;
	}
	else this.speed =this.topspeed;
	}

};
