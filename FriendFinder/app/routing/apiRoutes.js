var friends = require("../data/friends");

var userData = friends;

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {  
		res.json(userData);
	}); 

	app.post("/api/friends", function(req, res) {
		var addFriend = req.body;
		userData.push(addFriend);
		res.json(userData[0]);
	});

} 