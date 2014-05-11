var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');
function goal (scoreRef,playerName,lapTime) {

	var playerScoreRef = scoreRef.child(playerName);
	playerScoreRef.setWithPriority({name : playerName, score : lapTime}, lapTime);

    var newScoreRow = $("<tr/>");

	scoreFive = playerScoreRef.endAt().limit(5);
	scoreFive.once('value', function(data) {
		data.forEach(function(topEntry) {
			 newScoreRow.append($("<td/>").append($("<em/>").text(data.val().name)));
    		 newScoreRow.append($("<td/>").text(data.val().score));
  });
 });
 	  $("#leaderboardTable").append(newScoreRow);
};