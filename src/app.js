/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suitArray = ["♦", "♥", "♠", "♣"];
let numbersArray = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

// this function is creating a random number with the length of the array suitArray
const randomSuit = () => {
  let randomIcon = Math.floor(Math.random() * suitArray.length);
  return randomIcon;
};

//this function is creating a random number with the length of the array numbersArray
const randomNumber = () => {
  let randomNum = Math.floor(Math.random() * numbersArray.length);
  return randomNum;
};

window.onload = function() {
  //write your code here
  // selection of the id number which is on the H1 Tag
  let cardNumber = document.getElementById("number");
  // selection of the id on the div that contains all the creation of the card
  let cardSuit = document.getElementById("myCard");
  // suitValue is for changing all the suit classes which is on the i tags (this is for changing the 2 suit with the same value)
  let suitValue = document.querySelectorAll(".suit");

  // changes the inner HTML of the number of the card
  cardNumber.innerHTML = numbersArray[randomNumber()];
  // selects a random value of the suitArray using the function randomSuit
  let suitSelectionValue = suitArray[randomSuit()];
  //The for each is selecting all the tags that has the class .suit in order to change the styiling and the value of the suits randomly.
  suitValue.forEach(element => {
    if (suitSelectionValue === "♦") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("diamond");
    } else if (suitSelectionValue === "♥") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("heart");
    } else if (suitSelectionValue === "♠") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("spade");
    } else if (suitSelectionValue === "♣") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("club");
    }
  });

  console.log("Hello Rigo from the console!");
};

//The on click event uses de same logic for the window.onload, the only difference is that you need to remove the classes of the different suits whenever you click it.
document.getElementById("changeCard").onclick = () => {
  let cardNumber = document.getElementById("number");
  cardNumber.innerHTML = numbersArray[randomNumber()];

  let cardSuit = document.getElementById("myCard");
  let suitValue = document.querySelectorAll(".suit");
  let suitSelectionValue = suitArray[randomSuit()];

  cardSuit.classList.remove("diamond", "heart", "spade", "club");

  suitValue.forEach(element => {
    if (suitSelectionValue === "♦") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("diamond");
    } else if (suitSelectionValue === "♥") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("heart");
    } else if (suitSelectionValue === "♠") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("spade");
    } else if (suitSelectionValue === "♣") {
      element.innerHTML = suitSelectionValue;
      cardSuit.classList.add("club");
    }
  });
};
