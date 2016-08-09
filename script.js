$(document).ready(function() {
  var API = "http://api.openweathermap.org/data/2.5/weather?";
  var celsius;
  var myCity;
  var appid = "&units=metric&appid=3915d50cb899562300fa31025a84d74b";
  $.getJSON('http://ip-api.com/json', function(data) {
    myCity = data.city;

    API = API + "q=" + myCity + appid;

    $.getJSON(API, function(myData) {
      $('#city').html(myData.name + " - current city, within the country of " + myData.sys.country);
      celsius = Math.floor(myData.main.temp);
      $('#temp').html(celsius + "°");
      $('#prec').html(myData.weather[0].main + "  ... ");
      /* gets small icon from open weather api for current weather from openweather*/
      $("#icon").attr("src", "http://openweathermap.org/img/w/" + myData.weather[0].icon + ".png");
    });

    /* converts C to F and displays either */
  });
  $('#convert').click(function() {
    if ($("#convert").text() == "C") {
      $('#temp').html(celsius * 9 / 5 + 32);
      $('#convert').html("F");
    } else {
      $('#temp').html(celsius + "°");
      $('#convert').html("C");
    }
  })
});