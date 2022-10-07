const Character = require("./Character");

class Squire extends Character {
  message = "I'm a loser";
  whoIsServing;
  ballingLevel;

  constructor(name, age, family, whoIsServing, ballingLevel) {
    super(name, age, family);
    this.whoIsServing = whoIsServing;
    this.ballingLevel = ballingLevel;
  }

  communicate() {
    return this.message;
  }
}

module.exports = Squire;
