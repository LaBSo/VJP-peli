function smallHill(startX) {
	this.startX;
}

smallHill.prototype.draw = function(startX) {
	var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(50, this.startX, 100, 50);
};