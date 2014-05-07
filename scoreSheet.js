window.onload = function() {
	var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');
};

function goal (scoreRef,playerName,time) {
	scoreRef.setWithPriority({name : playerName, score : time}, time);

}
