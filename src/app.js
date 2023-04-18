/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let item1 of pronoun) {
    for (let item2 of adj) {
      for (let item3 of noun) {
        console.log(`${item1}${item2}${item3}.com`);
      }
    }
  }
};
