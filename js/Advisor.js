const Character = require("./Character");

class Advisor extends Character {
  message = "I don't know why, but i think i'm gonna die soon";
  whoIsAdvising;

  constructor(name, age, family, whoIsAdvising) {
    super(name, age, family);
    this.whoIsAdvising = whoIsAdvising;
  }

  communicate() {
    return this.message;
  }
}

module.exports = Advisor;
