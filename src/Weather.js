window.onload = function WindowLoad(event) {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://api.openweathermap.org/data/2.5/find?q=Seoul";

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = JSON.parse(xmlhttp.responseText);
      document.getElementById("city").innerHTML = 'City: ' + json.list[0].name;
      document.getElementById("weather_desc").innerHTML = 'Weather: ' + json.list[0].weather[0].description;
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};