window.onload = function WindowLoad(event) {
  if(thermostat.powerSave === true) {
    document.getElementById('psm_on').checked = true;
  }
  else {
    document.getElementById('psm_off').checked = true;
  };
};

Thermostat.prototype.pressIncrease = function() {
  this.increase()
}

Thermostat.prototype.pressDecrease = function() {
  this.decrease()
}

Thermostat.prototype.pressResetTherm = function() {
  this.resetTherm()
  document.getElementById('psm_on').checked = true;
  document.getElementById('psm_off').checked = false;
}

Thermostat.prototype.pressPowerSaveButton = function() {
  this.powerSaveButton()
}

Thermostat.prototype.update = function() {
  document.getElementById('display').innerHTML = thermostat.temp;
  var bg;
  switch (thermostat.temp) {
    case 10: bg = "#006600"; break;
    case 11: bg = "#009933"; break;
    case 12: bg = "#009900"; break;
    case 13: bg = "#00CC00"; break;
    case 14: bg = "#00FF00"; break;
    case 15: bg = "#66FF33"; break;
    case 16: bg = "#66FF66"; break;
    case 17: bg = "#99FF66"; break;
    case 18: bg = "#CCFF66"; break;
    case 19: bg = "#FFFF99"; break;
    case 20: bg = "#FFFF66"; break;
    case 21: bg = "#FFFF33"; break;
    case 22: bg = "#FFFF00"; break;
    case 23: bg = "#FFCC00"; break;
    case 24: bg = "#FF9900"; break;
    case 25: bg = "#FF6600"; break;
    case 26: bg = "#FF3300"; break;
    case 27: bg = "#FF0000"; break;
    case 28: bg = "#CC0000"; break;
    case 29: bg = "#990000"; break;
    case 30: bg = "#930000"; break;
    case 31: bg = "#870000"; break;
    case 32: bg = "#800000"; break;
  }
  document.body.style.background = bg;
}