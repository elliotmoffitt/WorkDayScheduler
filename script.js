// display current time using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// click event to save text area content to local storage
myStorage = window.localStorage;
// when app opens, display content for each time block from local storage
// it can be done with a loop or by targeting each time block separately

// change time block background color depending on the current hour (past, present, and future) with conditionals (if and else statements)
