function tausta(){
        this.img = new Image();
        this.img.src = "taustakuvatFinal.png"
        this.basicWidth = 400;
        this.highWidth = 300;
        this.lowWidth = 550;
        this.normalWidth = 800;
        this.groundWidth = 100;
        this.taustantausta = new Image();
        this.taustantausta.src = "taustantausta.png";
 
}
 
tausta.prototype.properX = function(x){
        var wholes = Math.floor(x/800);
        var finalX = x-wholes*800;
        return finalX;
}
 
tausta.prototype.drawBasic= function(x) {
   ctx.drawImage(this.img, 0, 1000, 400, gameHeight, x, 0, 400, gameHeight);
}
 
tausta.prototype.drawShort= function(x) {
   ctx.drawImage(this.img, 0, 500, 100, gameHeight, newX, 0, 100, gameHeight);
}
 
tausta.prototype.drawHigh= function(x) {
   ctx.drawImage(this.img, 0, 2000, 300, gameHeight, newX, 0, 300, gameHeight);
}
 
tausta.prototype.drawLow= function(x) {
   ctx.drawImage(this.img, 0, 1500, 550, gameHeight, newX, 0, 550, gameHeight);
}
 
tausta.prototype.drawGround= function(x) {
   ctx.drawImage(this.img, 0, 0, gameWidth, gameHeight, newX, 0, gameWidth, gameHeight);
}
 
tausta.prototype.drawBackground = function(x){
        ctx.drawImage(this.taustantausta, 0, 0, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
       
        for(var i=0; i < basicHills.length; i++){
                var miinustus = this.properX(Math.round(x));
                if((x+800>= basicHills[i] && x<=basicHills[i])){
                    var newX = this.properX(basicHills[i]-miinustus);
                    this.drawBasic(newX);
        } else if(x>= basicHills[i]-this.basicWidth && x>basicHills[i]){
                    this.drawBasic(-miinustus);
        } else {
               
                return;
        }
        }
}