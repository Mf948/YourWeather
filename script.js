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
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&cnt=" + "5" + "&appid=f235f42a755f4529b0fca0891283af30";

   
   

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
