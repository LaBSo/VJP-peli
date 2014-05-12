var scoreRef = new Firebase('https://vjp-peli.firebaseio.com/');

function goal (scoreRef,playerName,lapTime) {
	var priority = 1000/lapTime;
	var playerScoreRef = scoreRef.child(playerName);
	playerScoreRef.setWithPriority({name : playerName, score : lapTime}, priority);

    var newScoreRow = $("<tr/>");
	var index = 0;
	scoreList = playerScoreRef.endAt().limit(10);
	scoreList.once('value', function(data) {
		data.forEach(function(topEntry) {
			 newScoreRow.append($("<td/>").append($("<em/>").text(data.val().name)));
    		 newScoreRow.append($("<td/>").text(data.val().score));
  });
 });
 	  $("#leaderboardTable").append(newScoreRow);
};