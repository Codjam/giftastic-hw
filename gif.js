// $("#add-button").on("click", function(e){
//   e.preventDefault()
//   console.log("add-button");
//   // save into and make a button
//   if {
//
//   }
// })
$(document).ready(function(){
    $("#btn1").click(function(){
        $("img").before("<b>Before</b>");
    });


// Event listener for all button elements
$(".gif-button").on("click", function() {
  // In this case, the "this" keyword refers to the button that was clicked
  var person = $(this).attr("data-person");

  // Constructing a URL to search Giphy for the name of the person who said the quote
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing our AJAX GET request
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After the data comes back from the API
    .done(function(response) {
      // Storing an array of results in the results variable
      var results = response.data;

      // Looping over every result item
      for (var i = 0; i < results.length; i++) {

        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "") {
          // Creating a div with the class "item"
          var gifDiv = $("<div class='item'>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var personImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);

          // Function for displaying movie data
          function renderButtons() {

            // Deleting the movies prior to adding new movies
            // (this is necessary otherwise you will have repeat buttons)
            $("#buttons-view").empty();

            // Looping through the array of movies
            for (var i = 0; i < movies.length; i++) {

              // Then dynamicaly generating buttons for each movie in the array
              // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class of movie to our button
              a.addClass("gifs");
              // Adding a data-attribute
              a.attr("data-name", gifs[i]);
              // Providing the initial button text
              a.text(gifs[i]);
              // Adding the button to the buttons-view div
              $("#buttons-view").append(a);

              // This line grabs the input from the textbox
              var gifs = $("#gifs-input").val().trim();
              console.log(hello);
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
            }

          }

        }
      }
    });


});




































// var topics = ["herbs", "comics", "travel", "shaq", "bruceLee", ""];
//
// $("#button").on("click", function(){
// var topics = $(this).attr("id")
//
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//   topics + "&api_key=GofjwNGZPuV12xOxgeZApiHItEybVXtP=10";
// GofjwNGZPuV12xOxgeZApiHItEybVXtP
// console.log(hello)
// $.ajax({
//   url: queryURL,
//   method: "GET"
// })
// ////////////////////////////////////////////////////////////////////////////////
// .done(function(response) {
//   // Storing an array of results in the results variable
//   var results = response.data;
//
//
//
// // for loop for creating buttons
//
//
// $(document).ready(function(){
//
//  //==================================================================================
//  // GENERAL VARIABLES
//  //==================================================================================
//
//
//  var app = {
//  	giphyKey:"GofjwNGZPuV12xOxgeZApiHItEybVXtP",
//  	gifQuantity: "10",
//  	queryURL:"http://api.giphy.com/v1/gifs/search?q=",
//  	topics: ["Cheers", "Frasier", "Arrested Development", "Buffy The Vampire Slayer", "Firefly"],
//  	loadButtons: function(){ // Display all buttons in the "topics" array when the page loads.
//
//  		for(var i = 0; i < this.topics.length; i++){
//  			$(".sidebar--List").prepend(`
//  				<li><a href="#" class="gifCat">${[this.topics[i]]}</a></li>
//  				`)
//  		}
//  		console.log(this.topics);
//  	},
//  	addButton: function(){   // Add Buttons to the DOM using the users input.
//
//  		$("#addBtn").on("click", function(event){
//  			event.preventDefault();
//
//  			var newCat = $("#categoryInput").val();
//
//  			if (newCat != ""){ // Prevents empty string from being submitted.
//  				app.topics.push(newCat);
//
//  				$(".sidebar--List").empty();
//
//  				app.loadButtons();
//
//  				$("#categoryInput").val("");
//
//  				app.clearGifs();
//  				app.loadGifs(newCat);
//  			}
//
//  		})
//  	},
//  	displayCat: function(){
//  		$(document).on("click", ".gifCat", function(){
//  			var newCat = $(this).html();
//  			console.log(newCat);
//  			app.clearGifs();
//  			app.loadGifs(newCat);
//  		});
//  	},
//  	loadGifs: function(category){
//  		$.ajax({
//  			url: this.queryURL+category+"&api_key="+this.giphyKey+"&limit="+this.gifQuantity,
//  			method: "GET",
//  		})
//  		.done(function(result){
//  			console.log(result);
//  			var result = result.data;
//
//  			for (var i = 0; i < result.length; i++){
//  				$(".contentBlock").append(
//  					`
//  					<div class="gifBlock">
//  						<img
//  						src="${[result[i].images.fixed_height_still.url]}"
//  						data-toggle="still"
//  						data-animate="${[result[i].images.fixed_height.url]}"
//  						data-still="${[result[i].images.fixed_height_still.url]}"
//  						class="gif" width="100%"/>
//  						<div class="gifRating">${[result[i].rating]}</div>
//  					</div>
//  					`
//  					);
//  			}
//
//  		})
//
//  	},
//  	clearGifs: function(){
//  		$(".contentBlock").html("");
//  	},
//  	toggleGifs: function(){
//  		$(document).on("click", ".gif", function(){
//  			var toggleState = $(this).data("toggle");
//  			var animatedURL = $(this).data("animate");
//  			var stillURL = $(this).data("still");
//  			if (toggleState === "still"){
//  				$(this).attr("src", animatedURL);
//  				$(this).data("toggle", "animate");
//  			} else if (toggleState === "animate"){
//  				$(this).attr("src", stillURL);
//  				$(this).data("toggle", "still");
//  			}
//  		});
//  	}
//  }
//
//  // Populate the sidebar with starter links.
//  app.loadButtons();
//  // Listen for new Category Submissions.
//  app.addButton();
//  // Listen for clicks on existing category links.
//  app.displayCat();
//  // Listen for clicks on GIFs.
//  app.toggleGifs();
//
//  });










//
//   // Looping over every result item
//   for (var i = 0; i < results.length; i++) {
//
//     // Only taking action if the photo has an appropriate rating
//     if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//       // Creating a div with the class "item"
//       var gifDiv = $("<div class='item'>");
//
//       // Storing the result item's rating
//       var rating = results[i].rating;
//
//       // Creating a paragraph tag with the result item's rating
//       var p = $("<p>").text("Rating: " + rating);
//
//       // Creating an image tag
//       var personImage = $("<img>");
//
//       // Giving the image tag an src attribute of a proprty pulled off the
//       // result item
//       personImage.attr("src", results[i].images.fixed_height.url);
//
//       // Appending the paragraph and personImage we created to the "gifDiv" div we created
//       gifDiv.append(p);
//       gifDiv.append(personImage);
//
//       // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//       $("#gifs-appear-here").prepend(gifDiv);
//     }
//   }
// });
// });
