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
    var fivedayURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=f235f42a755f4529b0fca0891283af30";
   
   

var displayCity = $("#displaycity")
var displayTemperature = $("#displayTemperature")
var displayHumidity = $("#displayhumidity")
var displaywind = $("#displayWind")
var displayUV= $("#displayUV")
var temp1 =$("#DisTemp1")
var humid1 =$("#humid1")




    // CODE GOES HERE
    $.ajax({
      url: fivedayURL,
      method: "GET"
    }).then(function(response1) {
      temp1.text(response1.list[0].main.temp)
      humid1.text(response1.list[1].main.humidity)
      


      console.log(response1.list[1].main.humidity)
     
    })

    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response2) {
    console.log(response2)

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
