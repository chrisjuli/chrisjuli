
var https = require('https')
var canvas_token ="1~Hh9CLrLb8Sl9WqajNedHYYxvyqrhcQXnlui3hjjFjleviQcEzFx2VE2yMkHNFR6e"
var baseurl="https://canvas.instructure.com/api/v1/"
var path="courses"
var fullurl = baseurl + path
var params = "?access_token=" + canvas_token + "&state=available"
var others =  "?access_token=" + canvas_token + "&state=unpublished"

https.get(fullurl  + params, function(res) {
	res.on('data', function(d) {
		o = JSON.parse(d);
		for (var i in o) 
		console.log(o[i].name);
	});
}); 
https.get(fullurl  + others, function(res) {
	res.on('data', function(d) {
		o = JSON.parse(d);
		for (var i in o)
		if (o[i].start_at) 
		console.log(o[i].name);
	});
}); 
