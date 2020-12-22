var name = 'Payeng'

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
    localStorage.setItem('cityList', city) 

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

    var ul = $('.list-group1')
    //create li with js
    //append it to ul

    //save the city to local storage (localstorage.setItem)





    // CODE GOES HERE
    $.ajax({
      url: fivedayURL,
      method: "GET"
    }).then(function (response1) {
      temp1.text(response1.list[0].main.temp)
      humid1.text(response1.list[1].main.humidity)



      console.log(response1)

    })



    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response2) {
      console.log(response2)
      var lat = response2.coord.lat
      var lon = response2.coord.lon
    
      console.log(lat)
      console.log(lon)
      uvIndex(lat,lon)

      displayCity.text(city)
      displayTemperature.text((response2.main.temp - 273.15) * (1.8) + (32));
      displayHumidity.text(response2.main.humidity)
      displaywind.text(response2.wind.speed)
      /// displayUV.text(response.)

      //$("#movie-view").text(JSON.stringify(response)); 


    });

    // =================================================================
  });


  function uvIndex (lat, lon){
    var UVURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=f235f42a755f4529b0fca0891283af30";
    console.log('uv1', UVURL)
    $.ajax({
      url: UVURL,
      method: "GET"
    }).then(function (response3) {
      //console.log('uv reponse',response3.value)
      var valueIn = response3.value
      if (valueIn> 6){
        //bad

      } else if (valueIn< 3){
      //good
      }else {
        // moderate 
      }

      
    })
  
  }

  $('.list-group1').on('click', 'li', function(){
    console.log('this', $(this).text())
  })

});
