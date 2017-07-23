var friends = require("../data/friends");

var userData = friends;

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {  
		res.json(userData);
	}); 

	app.post("/api/friends", function(req, res) {
	
		var buddyMatch = {
			name: "",
			photo: "",
			friendDiff: 1000
		}

		var userData = req.body;
		var buddyScore = userData.scores;
		var totalDifference = 0;

		for (var i=0; i < friends.length; i++){
			// console.log(friends[i].name);
			totalDifference = 0;

			for (var j=0; j < friends[i].scores[j]; j++){
				totalDifference += Math.abs(parseInt(buddyScore[j]) - parseInt(friends[i].scores[j]));

				if (totalDifference <= buddyMatch.friendDiff){
					buddyMatch.name = friends[i].name;
					buddyMatch.photo = friends[i].photo;
					buddyMatch.friendDiff = totalDifference;
				}
			}
		}

		friends.push(userData);
		res.json(buddyMatch);				
	});
} 