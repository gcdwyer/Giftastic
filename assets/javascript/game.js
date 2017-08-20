$(document).ready(function() {

	var topics = ["cat","dog","mouse","bird"];

	function displayLabels() {

		var animal = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=2dabfa0142724e0f83be17b2f505b38d";

		$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {

    		console.log("response ============= " + response);

    		var results = response.data;
      		
      		for (var i = 0; i < 10; i++) {

      			// RATING ======================================

      			var imageDiv = $("<div>");
      			
      			var rating = results[i].rating;

      			var p = $("<p>").text("Rating: " + rating);

      			imageDiv.append(p);

      			// IMAGE ========================================

      			var imageURL = results[i].images.fixed_height_still.url;

      			var image = $("<img>")
	      			.attr("src", imageURL)
	      			.attr("class", "gif")
	 				.attr("data-state", "still")
	     			.attr("data-still", results[i].images.fixed_height_still.url)
	      			.attr("data-animate", results[i].images.fixed_height.url);

      			imageDiv.append(image);

      			$("#image-view").prepend(imageDiv);
      		}

    		// ANIMATE ================================================================

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
			})
    	})
	}

	// creates the buttons
	function renderButtons() {

		$("#button-view").empty();

		console.log("i got here");

		for (var i = 0; i < topics.length; i++) {
			
			var a = $("<button>")
				.addClass("animal")
				.attr("data-name", topics[i])
				.text(topics[i]);

			$("#button-view").append(a);
		}
	}

	$("#addButton").on("click", function() {

		var animal = $("#animalInput").val().trim();

		console.log("new animal: " + animal);

		topics.push(animal);

		renderButtons();
		// clears last entry
		$("#animalInput").val("");

	})

	$(document).on("click", ".animal", displayLabels);

	renderButtons();

});

