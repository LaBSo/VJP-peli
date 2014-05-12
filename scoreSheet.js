function goal(scoreRef, playerName, lapTime) {
	var priority = 1000 / lapTime;
	var newScoreRow = $("<tr/>");
	var htmlForPath = {};
	scoreRefscoreList.setWithPriority({
		name : playerName,
		score : lapTime
	}, priority);
	var tulokset;
	var index = 0;
	scoreList = scoreRef.endAt().limit(10).once("value", function(snap) {
		var i = 0;
		snap.forEach(function(userSnap) {

			console.log('name %s is in position %d with %d points', snap.name(), i++, snap.val());
			newScoreRow.append($("<td/>").append($("<em/>").text(snap.val().name)));
			newScoreRow.append($("<td/>").text(snap.val().score));

		$("#leaderboardTable").append(newScoreRow);
		});
	});


    // Insert the new score in the appropriate place in the table.




};