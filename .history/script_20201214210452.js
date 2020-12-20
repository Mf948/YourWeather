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
var displayCity = $("#displaycity")
var displayTemperature = $("#displayTemperature")
var displayHumidity = $("#displayHumidity")
var displaywind = $("#displayWind")
var displayUV= $("#displayUV")

    // CODE GOES HERE
    
    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    console.log(response)

    displayCity.text(city)
    displayTemperature.text(response.main.temp)
    displayHumidity.text(response.main.humidity)
    displayTemperature.text

//$("#movie-view").text(JSON.stringify(response)); 
});
 
    // =================================================================
  });
});
