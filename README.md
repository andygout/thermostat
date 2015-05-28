Thermostat
=================

Challenge:
-------

Create a simple interface for a digital thermostat, using JavaScript, jQuery and Jasmine.

Next Steps
-------

- Read Weather API to display weather in cities around the world (using both Javascript and jQuery).
- Create form to allow user to select city for which they'd like weather displayed.
- Create API: In order to support recording user changes to the thermostat persistently, and to get the current temperature, create a remote API that the thermostat can talk to. Storing the thermostat settings allows us to ensure that user commands are not lost, and getting the current temperature allows us to display that information to the user and to decide whether to turn the heating on (hint, you can build your own server to provide a temperature API)

Technologies Used
-------

- Written in Javascript (language)
- Tested using Jasmine (Behavior-driven development framework for testing JavaScript code)

Links:
-------

[Makers Academy Thermostat brief](https://github.com/makersacademy/course/blob/master/thermostat/thermostat.md)

[W3Schools: JSON Http Request](http://www.w3schools.com/json/json_http.asp)
```javascript
window.onload = function WindowLoad(event) {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://api.openweathermap.org/data/2.5/find?q=London";

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myArr = JSON.parse(xmlhttp.responseText);
      document.getElementById("id01").innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }

    document.getElementById("id01").innerHTML = out;
  }
};
```

[You Might Not Need jQuery](http://youmightnotneedjquery.com/)
```javascript
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
```

[jQuery](http://api.jquery.com/jQuery.getJSON/)
```javascript
window.onload = function WindowLoad(event) {
  $.getJSON('http://api.openweathermap.org/data/2.5/find?q=Seoul', function(data) {
    document.getElementById('city').innerHTML = data.list[0].name
    document.getElementById('weather_desc').innerHTML = data.list[0].weather[0].description
  });
};
```

[Open Weather Map](http://openweathermap.org/current#cities)

[Open Weather Map: API link](http://api.openweathermap.org/data/2.5/find?q=London)

Features:
-------

```sh
Thermostat starts at 20 degrees

You can increase the temp with the up button

You can decrease the temp with the down button

The minimum temperature is 10 degrees

If power saving mode is on, the maximum temperature is 25 degrees

If power saving mode is off, the maximum temperature is 32 degrees

Power saving mode is on by default

You can reset the temperature to 20 by hitting the reset button

The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature
```