// adding an event to open button 

// declaring and getting the open from html
const bttnclicked = document.getElementById("button");

// adding event using event function
bttnclicked.addEventListener("click", e => {
    // on clicking show this alert
    alert(`did you clicked?`);
});