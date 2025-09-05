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
window.addEventListener("load", time);
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
musicButton.appendChild(notesImage);

musicButton.innerHTML = '<img src="../images/playpause.png" alt="Button Image" style="width: 25px; height: 25px;">\n' +
    '\n' ;


// Append the button to the aside
const button = document.getElementById("button");
button.appendChild(musicButton);

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

function time() {
    let now = new Date();
    let endDate = new Date ("2025-01-09");
    let timeDifference = now - endDate;
    // Convert time difference to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // return the result
    daysDifference.toLocaleString();
    endDate.toLocaleDateString();
    now.toLocaleDateString();
     return {
         daysDifference ,
         endDate,
         now
     };
}
let result = time();
let timestamp = document.getElementById("footer");
timestamp.innerText = `The difference in days since last modified is: ${result.daysDifference} days.`;

let date = document.createElement("p");
date.innerText = `Date last modified: ${result.endDate}. Today's date is ${result.now}.`;
timestamp.appendChild(date);