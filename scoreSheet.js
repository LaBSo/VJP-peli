window.onload = function() {
	var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');
};

function goal (scoreRef,playerName,lapTime) {
	scoreRef.setWithPriority({name : playerName, score : lapTime}, lapTimetime);

}
