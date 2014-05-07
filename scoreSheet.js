
	var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');



function goal (scoreRef,playerName,lapTime) {
	var playerScoreRef = scoreRef.child(playerName);
	playerScoreRef.setWithPriority({name : playerName, score : lapTime}, lapTime);
}
