function smallHill(startX) {
	this.startX = startX;
	this.width = 150;
}

smallHill.prototype.draw = function() {
	var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.strokeStyle = "#FF0000";

    for (var i = this.startX; i < (this.startX + this.width); i++) {
    	ctx.moveTo(i, 100);
        ctx.lineTo(i, Math.sin((i-this.startX)/this.width)*100+100);
    	ctx.stroke();
    }
    
};