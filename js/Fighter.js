const Character = require("./Character");

class Fighter extends Character {
  message = "Hit first, then ask";
  weaponUsed;
  dexterity;

  constructor(name, age, family, weaponUsed, dexterity) {
    super(name, age, family);
    this.weaponUsed = weaponUsed;
    this.dexterity = dexterity;
  }

  comunicate() {
    return this.message;
  }
}

module.exports = Fighter;
