/*
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Chana Weiss
     Date:   12/05/2024

     Filename: js03.js
 */
// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];


// Function to write weekday names into the calendar
function addWeekDays() {
    let i = 0; // initial counter value

    //reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    // write each of the seven days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        // increase the counter by 1
        i++;
    }
}

window.addEventListener("load", function() {
    addWeekDays();
    showTimes();
});
//Function to write fame information into the calendar
function showTimes() {
    for (let i = 0; i < timeDates.length; i++) {
        let timeInfo = "";

        //Open the paragraph
        switch (timeStatus[i]) {
            case "Available":
                timeInfo += "<p class='available'>";
                break;
            case "Booked":
                timeInfo += "<p class='booked'>";
                break;
        }

        //Include the results and score
        timeInfo += "<br/>" + timeStatus[i] + "<br/>" + timeStart[i] +
            " - " + timeEnd[i];


        //Close the paragraph
        timeInfo += "</p>";

        //Write the information into a table cell
        let tableCell = document.getElementById(timeDates[i]);
        tableCell.insertAdjacentHTML('beforeend', timeInfo)

// Add click event listener to toggle booking status
        tableCell.addEventListener('click', function () {
            let paragraph = tableCell.querySelector('p');
            if (paragraph.classList.contains('available')) {
                paragraph.classList.remove('available');
                paragraph.classList.add('booked');
                paragraph.innerHTML = "<br/>Booked<br/>" + timeStart[i] + " - " + timeEnd[i];
            } else if (paragraph.classList.contains('booked')) {
                paragraph.classList.remove('booked');
                paragraph.classList.add('available');
                paragraph.innerHTML = "<br/>Available<br/>" + timeStart[i] + " - " + timeEnd[i];
            }
        });
    }
}
