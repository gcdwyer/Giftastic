$(document).ready(function() {

	var topics = ["cat","dog","mouse","bird"];

	function displayLabels() {

		var animal = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=2dabfa0142724e0f83be17b2f505b38d";

		// 	$(".labels").append("<button id='label' type='button'>" + topics[i] + "</button>");

		$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {

      		console.log(response);

      		for (var i = 0; i < 10; i++) {

      			// RATING ======================================

      			var imageDiv = $("<div class='image'>");
      			
      			var rating = response.data[i].rating;

      			var pOne = $("<p>").text("Rating: " + rating);

      			imageDiv.append(pOne);

      			// IMAGE ========================================

      			var imageURL = response.data[i].images.fixed_height_still.url;

      			var image = $("<img>").attr("src", imageURL);

      			imageDiv.append(image);

      			$("#image-view").prepend(imageDiv);

      			// $("#image-view").last().remove();

      		}
    	});
	}

	// creates the buttons
	function renderButtons() {

		$("#button-view").empty();

		console.log("i got here");

		for (var i = 0; i < topics.length; i++) {
			
			var a = $("<button>");

			a.addClass("image");

			a.attr("data-name", topics[i]);

			a.text(topics[i]);

			$("#button-view").append(a);
		}
	}

	//api.giphy.com/v1/gifs/search?q=monster&api_key=2dabfa0142724e0f83be17b2f505b38d

	$(document).on("click", ".image", displayLabels);

	

	// displayLabels();

	renderButtons();

});