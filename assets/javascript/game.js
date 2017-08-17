$(document).ready(function() {



	var topics = [
	"TBD1",
	"TBD2",
	"TBD3",
	"TBD4"
	]

	function displayLabels() {

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=basketball&api_key=2dabfa0142724e0f83be17b2f505b38d";

		for (var i = 0; i < topics.length; i++) {
			console.log(topics[i]);

			$(".labels").append("<button id='label' type='button'>" + topics[i] + "</button>");

		}

		$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {

      		console.log(response.data[i]);

      		$(".images").html(response.data[i].images.downsized.url);


    	});

	}



	//api.giphy.com/v1/gifs/search?q=monster&api_key=2dabfa0142724e0f83be17b2f505b38d




	displayLabels();

});