$(document).ready(function() {

	// create array with aritsts
  var artists = [
    "Kendrick Lamar", "SZA", "Chance The Rapper", "Andre 3000", "Erykah Badu", "Gucci Mane", "A$AP Ferg", "Missy Elliot", 
    ];

    // append buttons to page 


   // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }

  }

  $(document).on("click", ".artist-button", function() {
    $("#artists").empty();
    $(".artist-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var artistDiv = $("<div class=\"artist-item\">");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animated = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;

        var artistImage = $("<img>");
        artistImage.attr("src", still);
        artistImage.attr("data-still", still);
        artistImage.attr("data-animate", animated);
        artistImage.attr("data-state", "still");
        artistImage.addClass("artist-image");

        artistDiv.append(p);
        artistDiv.append(artistImage);

        $("#artists").append(artistDiv);
      }
    });
  });

  $(document).on("click", ".artist-image", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  $("#add-artist").on("click", function(event) {
    event.preventDefault();
    var newArtist = $("input").eq(0).val();

    if (newArtist.length > 2) {
      artists.push(newArtist);
    }

    populateButtons(artists, "artist-button", "#artist-buttons");

  });

  populateButtons(artists, "artist-button", "#artist-buttons");
});
