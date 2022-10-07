const Character = require("./Character");

class King extends Character {
  message = "You are all gonna die";
  yearsRuled;

  constructor(name, age, family, yearsRuled) {
    super(name, age, family);
    yearsRuled = this.yearsRuled;
  }

  comunicate() {
    return this.message;
  }
}

module.exports = King;
