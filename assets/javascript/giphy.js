$(document).ready(function() {

	// create array with aritsts
  var artists = [
    "Kendrick Lamar", "SZA", "Chance The Rapper", "Andre 3000", "Erykah Badu", "Gucci Mane", "A$AP Ferg", "Missy Elliot", 
    ];

  // create function to make buttons
  function createButtons( ) {
 
  }

  //create function when the button is clicked for adding the artist 
  $(document).on("click", ".artist-buttons", function() {
    $("#artists").empty();
  

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var imgUrl = response.data.image_original_url;

      //create for loop
     
      
  });
    // pause and stop gifs

 

 // push the new buttons