function Thermostat () {

  this.temp = 20
  this.minTemp = 10
  this.maxTemp = 25
  this.powerSave = true

};

Thermostat.prototype.increase = function() {
  this.temp += 1
};

Thermostat.prototype.decrease = function() {
  this.temp -= 1
};

Thermostat.prototype.resetTherm = function() {
  this.temp = 20
  this.maxTemp = 25
};

Thermostat.prototype.powerSaveButton = function() {
  if(this.powerSave === true) {
    this.maxTemp = 32;
    this.powerSave = false;
  }
  else {
    this.maxTemp = 25;
    this.powerSave = true;
  }
};


// var Javabuzz = function () {};

// Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
//   return (number % divisor === 0);
// };

// Javabuzz.prototype.isDivisibleByFifteen = function(number) {
//   return (this._isDivisibleBy(number, 15));
// };

// Javabuzz.prototype.isDivisibleByFive = function(number) {
//   return (this._isDivisibleBy(number, 5));
// };

// Javabuzz.prototype.isDivisibleByThree = function(number) {
//   return (this._isDivisibleBy(number, 3));
// };

// Javabuzz.prototype.says = function(number) {
//   if (this.isDivisibleByFifteen(number)) {
//     return "Javabuzz";
//   }
//   if (this.isDivisibleByFive(number)) {
//     return "Buzz";
//   }
//   if (this.isDivisibleByThree(number)) {
//     return "Java";
//   }
//   return number;
// };