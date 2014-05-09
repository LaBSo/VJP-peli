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
   ctx.drawImage(this.img, 0, 500, 100, gameHeight, x, 0, 100, gameHeight);
}
 
tausta.prototype.drawHigh= function(x) {
   ctx.drawImage(this.img, 0, 2000, 300, gameHeight, x, 0, 300, gameHeight);
}
 
tausta.prototype.drawLow= function(x) {
   ctx.drawImage(this.img, 0, 1500, 550, gameHeight, x, 0, 550, gameHeight);
}
 
tausta.prototype.drawGround= function(x) {
   ctx.drawImage(this.img, 0, 0, gameWidth, gameHeight, x, 0, gameWidth, gameHeight);
}
 
tausta.prototype.drawBackground = function(x){
        ctx.drawImage(this.taustantausta, 0, 0, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
       
        for(var i=0; i < basicHills.length; i++){ //basicHills
                var miinustus = this.properX(Math.round(x));
                if((x+799>= basicHills[i] && x<basicHills[i])){
                    var newX = this.properX(basicHills[i]-miinustus);
                    this.drawBasic(newX);                   
                } else if(x<= basicHills[i]+this.basicWidth && x>=basicHills[i]){               
                    var erotus = x-basicHills[i]
                    this.drawBasic(-erotus);               
                }  
        }
        for(var i=0; i < lowHills.length; i++){ //lowHills
                var miinustus = this.properX(Math.round(x));
                if((x+799>= lowHills[i] && x<lowHills[i])){
                    var newX = this.properX(lowHills[i]-miinustus);
                    this.drawLow(newX);                  
                } else if(x<= lowHills[i]+this.lowWidth && x>=lowHills[i]){
                    var erotus = x-lowHills[i]
                    this.drawLow(-erotus);               
                }  
        }
        for(var i=0; i < grounds.length; i++){ //long grounds
                var miinustus = this.properX(Math.round(x));
                if((x+799>= grounds[i] && x<grounds[i])){
                    var newX = this.properX(grounds[i]-miinustus);
                    this.drawGround(newX);                  
                } else if(x<= grounds[i]+this.normalWidth && x>=grounds[i]){
                    var erotus = x-grounds[i]
                    this.drawGround(-erotus);               
                }  
        }
        for(var i=0; i < shortGrounds.length; i++){ //short grounds
                var miinustus = this.properX(Math.round(x));
                if((x+799>= shortGrounds[i] && x<shortGrounds[i])){
                    var newX = this.properX(shortGrounds[i]-miinustus);
                    this.drawShort(newX);                  
                } else if(x<= shortGrounds[i]+this.groundWidth && x>=shortGrounds[i]){
                    var erotus = x-shortGrounds[i]
                    this.drawShort(-erotus);               
                }  
        }
        for(var i=0; i < highHills.length; i++){ //short grounds
                var miinustus = this.properX(Math.round(x));
                if((x+799>= highHills[i] && x<highHills[i])){
                    var newX = this.properX(highHills[i]-miinustus);
                    this.drawHigh(newX);                  
                } else if(x<= highHills[i]+this.highWidth && x>=highHills[i]){
                    var erotus = x-highHills[i]
                    this.drawHigh(-erotus);               
                }  
        }
}