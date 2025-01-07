
// Get all list items
let items = document.getElementsByClassName('list-item');

// Get all descriptions
let descriptions = document.getElementsByClassName('description');

// Add event listener to each item
for (let i = 0; i < items.length; i++) {
items[i].addEventListener('click', function() {
// Toggle the corresponding description's visibility
descriptions[i].style.display = (descriptions[i].style.display === 'block') ? 'none' : 'block';
});
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
