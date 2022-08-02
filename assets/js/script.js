// set current hour
var currentHour = moment().format("HH");

// show the current day/time at the top of the page
$("#currentDay").html(moment().format("[Today is] dddd, MMMM Do YYYY"));
console.log("Current Hour:", currentHour);

// loop the number of hours we want to display for the work day
// creates the rows and columns, adds styling
function createDay() {
    for (i = 8; i <= 18; i++) {
        row = $(`<section class="row time-block">`);
        column1 = $(`<section class="col hour">${moment().set('hour', i).format("ha")}</section>`);
        column2 = $(`<textarea id="description"  class="col description"></textarea>`);
        column3 = $(`<section class="col saveBtn"><i id="saveBtn" class="fas fa-save saveIcon"></i></section></section>`);

        row.append(column1);
        row.append(column2);
        row.append(column3);
        $(".container").append(row);

        // set the current hour to red
        // set all past hours to gray
        // set all future hours as green
        if (moment().set('hour', i).format("HH") === currentHour) {
            column2.addClass("present");
        } else if (moment().set('hour', i).format("HH") < currentHour) {
            column2.addClass("past");
        } else if (moment().set('hour', i).format("HH") > currentHour) {
            column2.addClass("future");
        };
    };
}

createDay();

// set the save buttons to grab the hour and description, then save it to local storage
$(".saveBtn").on("click", function () {
    var hour = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    
    localStorage.setItem(hour, description);
});

// loops through all of the hours, grabs descriptions from local storage and sets them if they exist
function getDescriptions() {
    $(".hour").each(function() {
        var hour = $(this).text();
        var description = localStorage.getItem(hour);

        if(description !== null) {
            $(this).siblings(".description").val(description);
            console.log(description, "exists in local storage");
        }
    });
}

getDescriptions();