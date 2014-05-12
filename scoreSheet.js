var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');
var index = 0;

function goal (scoreRef,playerName,lapTime) {
	var priority = 1000/lapTime;
	var playerScoreRef = scoreRef.child(playerName);
	playerScoreRef.setWithPriority({name : playerName, score : lapTime}, priority);
	var tulokset;
	scoreList = playerScoreRef.endAt().limit(10);
	scoreList.once('value', function(data) {
			data.forEach(function() {
			ctx.fillText(data.val().name, 300, 200+index*25);
			ctx.fillText(data.val().score, 400, 200+index*25);
  			index++;
 });
});
}
