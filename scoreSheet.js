<<<<<<< HEAD
=======
window.onload = function() {
	//var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');
};
>>>>>>> b4b7c2697e5546eb55431228156b2277c29262f5

function goal (scoreRef,playerName,lapTime) {
	var playerScoreRef = scoreRef.child(playerName);
	playerScoreRef.setWithPriority({name : playerName, score : lapTime}, lapTime);
}
