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
}