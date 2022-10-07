const Advisor = require("./Advisor");
const Fighter = require("./Fighter");
const King = require("./King");
const Squire = require("./Squire");

const joffreyBaratheon = new King("Joffrey", 16, "Baratheon", 2);
const jaimeLannister = new Fighter("Jaime", 36, "Lannister", "Sword", 8);
const daenerysTargaryen = new Fighter(
  "Daenerys",
  29,
  "Targaryen",
  "Dragons",
  2
);
const tyrionLannister = new Advisor("Tyrion", 35, "Lannister", "Daenerys");
const bronnBlackwater = new Squire("Bronn", 38, undefined, "Jaime", 0);

const charactersOfGameOfThrones = () => {};
