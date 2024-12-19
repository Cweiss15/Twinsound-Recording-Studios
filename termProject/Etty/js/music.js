
// Get all list items
let items = document.getElementsByClassName('list-item');

// Get all descriptions
let descriptions = document.getElementsByClassName('description');

// Add event listener to each item
for (let i = 0; i < items.length; i++) {
items[i].addEventListener('click', function() {
// Toggle the corresponding description's visibility
descriptions[i].style.display = (descriptions[i].style.display == 'block') ? 'none' : 'block';
});
}
