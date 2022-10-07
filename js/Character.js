class Character {
  name;
  age;
  family;
  message;
  alive = true;
  show = "Game of thrones";

  constructor(name, age, family) {
    this.name = name;
    this.age = age;
    this.family = family;
  }

  comunicate() {
    return this.message;
  }

  die() {
    this.alive = false;
  }
}

module.exports = Character;
