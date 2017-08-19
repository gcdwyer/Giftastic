$(document).ready(function() {

	var topics = ["cat","dog","mouse","bird"];

	function displayLabels() {

		var animal = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=2dabfa0142724e0f83be17b2f505b38d";

		$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {

      		console.log(response);

      		for (var i = 0; i < 10; i++) {

      			// RATING ======================================

      			var imageDiv = $("<div class='image'>");
      			
      			var rating = response.data[i].rating;

      			var p = $("<p>").text("Rating: " + rating);

      			imageDiv.append(p);

      			// IMAGE ========================================

      			var imageURL = response.data[i].images.fixed_height_still.url;

      			var image = $("<img>")
	      			.attr("src", imageURL)
	      			.attr("class", "gif")
	 				.attr("data-state", "still")
	     			.attr("data-still", response.data[i].images.fixed_height_still.url)
	      			.attr("data-animate", response.data[i].images.fixed_height.url);

      			console.log("my image: " + image);
      			console.log("my animal: " + animal);

      			imageDiv.append(image);

      			$("#image-view").prepend(imageDiv);

      			
      		}
    	});
	}

	// ANIMATE ===============================================================================

	$(".gif").on("click", function() {
		
		var state = $(this).attr("data-state");

		console.log("state: " + state);

		if (state === "still") {

			$(this).attr("src", $(this).attr("data-animate"));

			$(this).attr("data-state", "animate");

		} else {

			$(this).attr("src", $(this).attr("data-still"));

			$(this).attr("data-state", "still");
		}

	});


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