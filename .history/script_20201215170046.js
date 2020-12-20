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

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE
    // =================================================================
    var cities = ["New York", "Los Angeles", "Chicago", "Huston"];

    // Generic function for capturing the movie name from the data-attribute
    function alertcityName() {
     
      var onecity = $(this).attr("data-name");
      alert(onecity)

    }
    function renderButtons() {

      // Deleting the movies prior to adding new movies
      // (this is necessary otherwise we will have repeat buttons)
      $("#buttons-view").empty();

      // Looping through the array of movies
      for (var i = 0; i < movies.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("movie");
        // Added a data-attribute
        a.attr("data-name", movies[i]);
        // Provided the initial button text
        a.text(movies[i]);
        // Added the button to the HTML
        $("#buttons-view").append(a);
      }
    }

    // This function handles events where one button is clicked
    $("#add-movie").on("click", function(event) {
      event.preventDefault();

      // This line grabs the input from the textbox
      var movie = $("#movie-input").val().trim();

      // The movie from the textbox is then added to our array
      movies.push(movie);

      // Calling renderButtons which handles the processing of our movie array
      renderButtons();
    });

    // Function for displaying the movie info
    // We're adding a click event listener to all elements with the class "movie"
    // We're adding the event listener to the document itself because it will
    // work for dynamically generated elements
    // $(".movies").on("click") will only add listeners to elements that are on the page at that time
    $(document).on("click", ".movie", alertMovieName);

    // Calling the renderButtons function to display the initial buttons
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
