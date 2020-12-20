$(document).ready(function() {
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  // This .on("click") function will trigger the AJAX Call
  $("#find-city").on("click", function(event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#city-input").val();
    //[] array
    localStorage.setItem('cityList', city)

    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f235f42a755f4529b0fca0891283af30";

   
    var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

    // Function for displaying movie data
    function renderButtons() {

      // Deleting the movie buttons prior to adding new movie buttons
      // (this is necessary otherwise we will have repeat buttons)
      $("#buttons-view").empty();

      // Looping through the array of movies
      for (var i = 0; i < movies.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("movie");
        // Adding a data-attribute with a value of the movie at index i
        a.attr("data-name", movies[i]);
        // Providing the button's text with a value of the movie at index i
        a.text(movies[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
      }
    }

    // This function handles events where one button is clicked
    $("#add-movie").on("click", function(event) {
      // event.preventDefault() prevents the form from trying to submit itself.
      // We're using a form so that the user can hit enter instead of clicking the button if they want
      event.preventDefault();

      // This line will grab the text from the input box
      var movie = $("#movie-input").val().trim();
      // The movie from the textbox is then added to our array
      movies.push(movie);

      // calling renderButtons which handles the processing of our movie array
      renderButtons();
    });

    // Calling the renderButtons function at least once to display the initial list of movies
    renderButtons();

var displayCity = $("#displaycity")
var displayTemperature = $("#displayTemperature")
var displayHumidity = $("#displayhumidity")
var displaywind = $("#displayWind")
var displayUV= $("#displayUV")




    // CODE GOES HERE
    
    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    console.log(response)

    displayCity.text(city)
 displayTemperature.text((response.main.temp-273.15)*(1.8)+(32));
displayHumidity.text(response.main.humidity)
displaywind.text(response.wind.speed)
   /// displayUV.text(response.)

//$("#movie-view").text(JSON.stringify(response)); 
});
 
    // =================================================================
  });
});
