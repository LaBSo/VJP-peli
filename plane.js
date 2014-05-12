function plane(src) {
        this.speed = 0;
        this.locationx = -80;
        this.locationy = -20;
        this.src = src;
        this.topspeed = 30;
}

plane.prototype.update = function(img) {
	var n = 0;
	if(this.speed > auto.speed +1){
		this.speed = this.speed -1;}
	else if(this.speed < auto.speed +1){
		if( this.speed <this.topspeed){
		this.speed = this.speed +0.1;
	}
	else this.speed =this.topspeed;
	}
	if(auto.speed > 18){
		this.locationx = this.locationx - 1;
	}
	else{
	this.locationx = this.locationx + Math.sin(sx)*2 ;
	}
ctx.drawImage(img,this.locationx,this.locationy);
};
