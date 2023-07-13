// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const status = document.getElementById("flightStatus");
    const background = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const takeoffButton = document.getElementById("takeoff");

    
    takeoffButton.addEventListener('click', event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            status.innerHTML = 'Shuttle in flight.';
            background.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10,000';
        }
    }

    landButton.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.")
        status.innerHTML = 'Shuttle has landed.';
        background.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
      });

}


window.addEventListener("load", init);
