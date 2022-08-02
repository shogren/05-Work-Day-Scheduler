// set our initial variables
var dateHeader = $("#currentDay");
var container = $(".container");
var currentDay = moment();
var currentHour = moment().format("H");

// show the current day/time at the top of the page
dateHeader.html(currentDay.format("[Today is] dddd, MMMM Do YYYY"));
console.log("Current Hour:", currentHour);

var row = "";

// loop the number of hours we want to display for the work day
// creates the rows and columns, adds styling
for (i = 0; i <= 23; i++) {

    row = $(`<section class="row time-block">`);
    column1 = $(`<section class="col hour">${moment().set('hour', i).format("ha")}</section>`);
    column2 = $(`<textarea id="description" class="col description"></textarea>`);
    column3 = $(`<section class="col saveBtn"><i id="description saveBtn" class="fas fa-save saveIcon"></i></section></section>`);

    // column2.val('');
    row.append(column1);
    row.append(column2);
    row.append(column3);
    container.append(row);

    // set the current hour to red
    // set all past hours to gray
    // set all future hours as green
    if (moment().set('hour', i).format("H") === currentHour) {
        column2.addClass("present");
    } else if (moment().set('hour', i).format("H") < currentHour) {
        column2.addClass("past");
    } else if (moment().set('hour', i).format("H") > currentHour) {
        column2.addClass("future");
    };
};


var description = document.getElementById('description').value;
console.log(description);

function save() {
    if(description === '') {
        console.log("there's no description");
    } else {
        localStorage.setItem("testKey", "hello");
    }
}

// save button
var save = $(".saveIcon");
save.click(function(){
    save();
    console.log("click");
  });


