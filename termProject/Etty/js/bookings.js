let userName = "";

// Function to write weekday names into the calendar
function addWeekDays() {
    let i = 0; // initial counter value

    let headingCells = document.getElementsByTagName("th");

    // write each of the seven days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        i++;
    }
}

window.addEventListener("load", function () {
    addWeekDays();
    showTimes();
});

function showTimes() {
    for (let i = 0; i < timeDates.length; i++) {
        let timeInfo = "";

        //Time status
        switch (timeStatus[i]) {
            case "Available":
                timeInfo += "<p class='available'>";
                break;
            case "Booked":
                timeInfo += "<p class='booked'>";
                break;
        }

        //Write times
        timeInfo += "<br/>" + timeStatus[i] + "<br/>" + timeStart[i] +
            " - " + timeEnd[i];


        //Close the paragraph
        timeInfo += "</p>";

        //Write the information into a table cell
        let tableCell = document.getElementById(timeDates[i]);
        tableCell.insertAdjacentHTML('beforeend', timeInfo)

// Add click event listener to switch booking status and add name
        tableCell.addEventListener('click', function () {
            let paragraph = tableCell.querySelector('p');
            if (paragraph.classList.contains('available')) {
                userName = prompt("To complete yor booking, Please enter your name:");
                paragraph.classList.remove('available');
                paragraph.classList.add('booked');
                paragraph.innerHTML = "<br/>Booked by " + userName + "<br/>" + timeStart[i] + " - " + timeEnd[i];

            } else if (paragraph.classList.contains('booked')) {
                paragraph.classList.remove('booked');
                paragraph.classList.add('available');
                paragraph.innerHTML = "<br/>Available<br/>" + timeStart[i] + " - " + timeEnd[i];
            }
        });
    }
}

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

// dates for availability
let timeDates = ["2024-12-29", "2024-12-31", "2025-1-1", "2025-1-5", "2025-1-7", "2025-1-8",
    "2025-1-12", "2025-1-14", "2025-1-15", "2025-1-19", "2025-1-21", "2025-1-22", "2025-1-26",
    "2025-1-28", "2025-1-29"];

// Start times
let timeStart = ["1PM", "7PM", "7PM", "1PM", "7PM", "7PM", "1PM", "7PM", "7PM", "1PM", "7PM",
    "7PM", "1PM", "7PM", "7PM"];

// End times
let timeEnd = ["3PM", "8pm", "8pm", "3PM", "8pm", "8pm", "3PM", "8pm", "8pm", "3PM", "8pm",
    "8pm", "3PM", "8pm", "8pm"];

// Time status to start
let timeStatus = ["Booked", "Booked", "Available", "Available", "Available", "Available", "Available", "Available",
    "Available", "Available", "Available", "Available", "Available", "Available", "Available"];



