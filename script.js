
$(document).ready(function () {
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  // This .on("click") function will trigger the AJAX Call
  $("#find-city").on("click", function (event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#city-input").val();
    //[] array
   // localStorage.setItem('cityList', city) 

    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f235f42a755f4529b0fca0891283af30";
    var fivedayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=f235f42a755f4529b0fca0891283af30";


    var displayCity = $("#displaycity")
    var displayTemperature = $("#displayTemperature")
    var displayHumidity = $("#displayhumidity")
    var displaywind = $("#displayWind")
    var displayUV = $("#displayUV")
    var temp1 = $("#DisTemp1")
    var humid1 = $("#humid1")
    var temp2 = $("#DisTemp2")
    var humid2 = $("#humid2")
    var temp3 = $("#DisTemp3")
    var humid3 = $("#humid3")
    var temp4 = $("#DisTemp4")
    var humid4 = $("#humid4")
    var temp5 = $("#DisTemp5")
    var humid5 = $("#humid5")
    

    //var ul = $('.list-group1')
    //create li with js
    //append it to ul

    //save the city to local storage (localstorage.setItem)


    // CODE GOES HERE
    $.ajax({
      url: fivedayURL,
      method: "GET"
    }).then(function (response1) {
      var w1Temp= ((response1.list[0].main.temp-273.15)*(1.8)  +(32))
      temp1.text(w1Temp.toFixed(2))
      humid1.text(response1.list[0].main.humidity)
      var w2Temp= ((response1.list[1].main.temp-273.15)*(1.8)  +(32))
      temp2.text(w2Temp.toFixed(2))
      humid2.text(response1.list[1].main.humidity)
      var w3Temp= ((response1.list[2].main.temp-273.15)*(1.8)  +(32))
      temp3.text(w3Temp.toFixed(2))
      humid3.text(response1.list[2].main.humidity)
      var w4Temp= ((response1.list[3].main.temp-273.15)*(1.8)  +(32))
      temp4.text(w4Temp.toFixed(2))
      humid4.text(response1.list[3].main.humidity)
      var w5temp= ((response1.list[4].main.temp-273.15)*(1.8)  +(32))
      temp5.text(w5temp.toFixed(2))
      humid5.text(response1.list[4].main.humidity)
      



      console.log(response1)

    })



    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response2) {
      console.log(response2)
      var lat = response2.coord.lat
      var lon = response2.coord.lon

      uvIndex(lat,lon)

      displayCity.text(city)
      var mainTemp = ((response2.main.temp - 273.15) * (1.8) + (32));
      displayTemperature.text(mainTemp.toFixed(2))
      displayHumidity.text(response2.main.humidity)
      displaywind.text(response2.wind.speed)
      
    

    // =================================================================
  });
  function uvIndex (lat, lon){
    var UVURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=f235f42a755f4529b0fca0891283af30";
    var displaycard =$("#displayUV")
    $.ajax({
      url: UVURL,
      method: "GET"
    }).then(function (response3) {
      

    displayUV.text(response3.value)
      var valueIn = response3.value
      if (valueIn> 6){
        //bad
        displaycard.addclass('high')

      } else if (valueIn< 3){
      //good
      displaycard.addclass('low')
      }else {
        // moderate 
        displaycard.addclass('moderate')
      }

      
    })
  
  }

  
});
  
});
