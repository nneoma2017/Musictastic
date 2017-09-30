$(document).ready(function() {

	// create array with aritsts
  var artists = [
    "Kendrick Lamar", "SZA", "Chance The Rapper", "Andre 3000", "Erykah Badu", "Gucci Mane", "A$AP Ferg", "Missy Elliot", 
    ];

    // append buttons to page 


    for (var i = 0 ; i < artists.length ; i++ )  {
        $("#artist-buttons").append("<button class='btn btn-primary' type='submit'> "+ artists[i] + " </button>");
        console.log("buttons");
    }


  // create function to make buttons
  function createButtons( textValue ) {
        $("#artist-buttons").append("<button class='btn btn-primary' type='submit'> "+ textValue + " </button>");
      
 
  }

  $("#artist-form").on("submit",function(event) {
    event.preventDefault();
      var artistText = $("#artist-input").val();
      
      createButtons(artistText);
  })




  //create function when the button is clicked for adding the artist 
  $("#artist-buttons").on("click", ".btn", function() {
    $("#artists").empty();
    console.log("#artist-buttons")

    var artistText = $(this).html();
    console.log(artistText);
    
  

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + artistText + "&api_key=dc6zaTOxFJmzC&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var imgUrl = response.data.image_original_url;
      console.log(response);

      //create for loop
      //append images 
      // pause and stop gifs


     
      
  });

  });

});


 

 // push the new buttons