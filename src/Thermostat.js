function Thermostat () {

  this.temp = 20
  this.minTemp = 10
  this.maxTemp = 25
  this.powerSave = true

};

Thermostat.prototype.increase = function() {
  if((this.powerSave === true && this.temp < 25) || (this.powerSave === false && this.temp < 32)) {
    this.temp += 1
  }
};

Thermostat.prototype.decrease = function() {
  if(this.temp > 10) {
    this.temp -= 1
  }
};

Thermostat.prototype.resetTherm = function() {
  this.temp = 20
  this.maxTemp = 25
  this.powerSave = true
};

Thermostat.prototype.powerSaveButton = function() {
  if(this.powerSave === true) {
    this.maxTemp = 32;
    this.powerSave = false;
  }
  else {
    this.maxTemp = 25;
    this.powerSave = true;
    this.temp = 25;
  }
};

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

thermostat = new Thermostat