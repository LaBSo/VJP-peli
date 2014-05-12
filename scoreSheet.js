var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');

function goal (scoreRef,playerName,lapTime) {
	var priority = 1000/lapTime;
	var playerScoreRef = scoreRef.child(playerName);
	playerScoreRef.setWithPriority({name : playerName, score : lapTime}, priority);
	var tulokset;
	var index = 0;
	scoreList = playerScoreRef.endAt().limit(10);
	scoreList.once('value', function(data) {
			data.forEach(function() {
			ctx.fillText(data.val().name, 350-index*25, 250);
			ctx.fillText(data.val().score, 380 -index*25, 250);
  			index++;

 });
 	  // $("#leaderboardTable").append(newScoreRow);
};