/*  Twinsound Recording Studio
    Price Calculator
    Author: Chana Pesha Mandel
    Date: 1/1/2025

    Filename: priceCalculator.js
 */

const HOUR_COST = 100;
const SOUNDTRACK_COST = 75;
const VOCAL_REMOVER_COST = 25;
const ADD_PERSON_COST = 25;

window.addEventListener("load", setupForm);

function setupForm() {
    document.getElementById("hours").value = 1;
    document.getElementById("people").value =1;
    document.getElementById("noSound").checked = true;

    setPrice();

    document.getElementById("hours").onchange = setPrice;
    document.getElementById("people").onchange = setPrice;
    document.getElementById("soundtrack").onchange = setPrice;
    document.getElementById("vocalRemover").onchange = setPrice;
    document.getElementById("noSound").onchange = setPrice;
}

function setPrice() {
    let totalPrice = 0;
    let totalHours = document.getElementById("hours").value;
    let totalPeople = document.getElementById("people").value;
    let soundtrack = document.getElementById("soundtrack").checked;
    let vocalRemover = document.getElementById("vocalRemover").checked;

    totalPrice += totalHours * HOUR_COST;

    if(totalPeople > 3) {
        totalPrice += (totalPeople - 3) * ADD_PERSON_COST;
    }

    totalPrice += soundtrack ? SOUNDTRACK_COST : 0;

    totalPrice += vocalRemover ? VOCAL_REMOVER_COST : 0;

    document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
}

const musicButton = document.createElement("button");
musicButton.className = "button";
musicButton.id = "openOverlay";
musicButton.textContent= "Click Me"

// add the image for the button
const notesImage = document.createElement("img");

// Append the button to the aside
const aside = document.getElementById("asideTotal");
aside.appendChild(musicButton);

//Overlay
let overlay = document.getElementById("overlay");
let closeOverlayButton = document.getElementById("closeOverlay");

// event listener for button
musicButton.addEventListener("click", () => {
    overlay.style.display = "flex";
});

closeOverlayButton.addEventListener("click", () => {
    overlay.style.display = "none"
});