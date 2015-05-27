describe('Thermostat', function(){

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has a default', function() {
    it('temperature setting of 20°C', function() {
      expect(thermostat.temp).toBe(20);
    });

    it('min temp of 10°C', function() {
      expect(thermostat.minTemp).toBe(10);
    });

    it('power save on with max temp of 25°C', function() {
      expect(thermostat.powerSave).toBe(true);
      expect(thermostat.maxTemp).toBe(25);
    });
  });

  describe('press button', function() {
    it('increase temp to increase temp by 1°C', function() {
      thermostat.increase()
      expect(thermostat.temp).toBe(21);
    });

    it('descrease temp to decrease temp by 1°C', function() {
      thermostat.decrease()
      expect(thermostat.temp).toBe(19);
    });

    it('power save (off) to alter max temp to 32°C', function() {
      thermostat.powerSaveButton()
      expect(thermostat.maxTemp).toBe(32);
    });

    it('power save (on) to alter max temp to 25°C', function() {
      thermostat.maxTemp = 32
      thermostat.powerSave = false
      thermostat.powerSaveButton()
      expect(thermostat.maxTemp).toBe(25);
    });

    it('reset temp to 20°C and max temp to 25°C', function() {
      thermostat.increase()
      thermostat.powerSaveButton()
      thermostat.resetTherm()
      expect(thermostat.temp).toBe(20);
      expect(thermostat.maxTemp).toBe(25);
      expect(thermostat.powerSave).toBe(true);
    });

  });

});

// describe('Javabuzz', function(){

//   var javabuzz;

//   beforeEach(function() {
//     javabuzz = new Javabuzz();
//   });

//   describe('knows when a number is', function() {
//     it('divisible by 3', function() {
//       expect(javabuzz.isDivisibleByThree(3)).toBe(true);
//     });
//   });

//   describe('knows when a number is NOT', function() {
//     it('divisible by 3', function() {
//       expect(javabuzz.isDivisibleByThree(1)).toBe(false);
//     });
//   });

//   describe('knows when a number is', function() {
//     it('divisible by 5', function() {
//       expect(javabuzz.isDivisibleByFive(5)).toBe(true);
//     });
//   });

//   describe('knows when a number is NOT', function() {
//     it('divisible by 5', function() {
//       expect(javabuzz.isDivisibleByFive(1)).toBe(false);
//     });
//   });

//   describe('knows when a number is', function() {
//     it('divisible by 15', function() {
//       expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
//     });
//   });

//   describe('knows when a number is NOT', function() {
//     it('divisible by 15', function() {
//       expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
//     });
//   });

//   describe('when playing, says', function() {
//     it('"Java" when a number is divisible by 3', function() {
//       expect(javabuzz.says(3)).toEqual("Java");
//     });
//   });

// });