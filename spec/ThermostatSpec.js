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

    it('reset temp and will set temp to 25°C if above 25°C', function() {
      thermostat.powerSaveButton()
      thermostat.temp = 26
      thermostat.powerSaveButton()
      expect(thermostat.temp).toBe(25);
    })
  });

  describe('does not allow', function() {
    it('temp to go below minimum temp', function() {
      thermostat.temp = 10
      thermostat.decrease()
      expect(thermostat.temp).toBe(10)
    });

    it('temp to go above max temp (power saver mode on)', function() {
      thermostat.temp = 25
      thermostat.increase()
      expect(thermostat.temp).toBe(25)
    });

    it('temp to go above max temp (power saver mode off)', function() {
      thermostat.powerSaveButton()
      thermostat.temp = 32
      thermostat.increase()
      expect(thermostat.temp).toBe(32)
    });
  });

});