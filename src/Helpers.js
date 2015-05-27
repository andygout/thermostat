Thermostat.prototype.pressIncrease = function() {
  this.increase()
  document.getElementById('display').innerHTML = thermostat.temp;
}

Thermostat.prototype.pressDecrease = function() {
  this.decrease()
  document.getElementById('display').innerHTML = thermostat.temp;
}

Thermostat.prototype.pressResetTherm = function() {
  this.resetTherm()
  document.getElementById('display').innerHTML = thermostat.temp;
}

Thermostat.prototype.pressPowerSaveButton = function() {
  this.powerSaveButton()
  document.getElementById('display').innerHTML = thermostat.temp;
}