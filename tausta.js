function tausta(){
	var img = new Image();
	img.src = "taustakuvatFinal.png"
	var basicWidth = 400;
	var highWidth = 300;
	var lowWidth = 550;
	var normalWidth = 800;
	var groundWidth = 100;

}

tausta.prototype.properX = function(x){
	if(x>800){
		while(x>800){
			x-800
		}
	}
	return x
}

tausta.prototype.drawBasic= function(x) {
   var newX = this.properX(x);
   ctx.drawImage(img, 0, 1000, 400, gameHeight, newX, 0, 400, gameHeight);
}

tausta.prototype.drawShort= function(x) {
	var newX = this.properX(x);
   ctx.drawImage(img, 0, 500, 100, gameHeight, newX, 0, 100, gameHeight);
}

tausta.prototype.drawHigh= function(x) {
   var newX = this.properX(x);
   ctx.drawImage(img, 0, 2000, 300, gameHeight, newX, 0, 300, gameHeight);
}

tausta.prototype.drawLow= function(x) {
   var newX = this.properX(x);
   ctx.drawImage(img, 0, 1500, 550, gameHeight, newX, 0, 550, gameHeight);
}

tausta.prototype.drawGround= function(x) {
   var newX = this.properX(x);
   ctx.drawImage(img, 0, 0, gameWidth, gameHeight, newX, 0, gameWidth, gameHeight);
}

tausta.prototype.drawBackground = function(x){
	
}