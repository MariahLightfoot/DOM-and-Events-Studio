// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){

    takeoff.onclick = readyForTakeoffConfirmation;
    function readyForTakeoffConfirmation(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff");

        if(confirm){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    }

    landing.onclick = shuttleIsLanding;
    function shuttleIsLanding(){
       window.alert("The shuttle is landing. Landing gear engaged.");
       document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
       document.getElementById("shuttleBackground").style.backgroundColor = "green"; 
       document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }

    missionAbort.onclick = abortMission;
    function abortMission(){
        let response = window.confirm("Confirm that you want to abort the mission.");

        if(confirm){
            document.getElementById('flightStatus').innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    }

    let x = 0;
    let heightCounter = 0;

    leftButton.onclick = moveRocketImageLeft;
    function moveRocketImageLeft(){
       document.getElementById("rocket").style.transform = `translate(${x -= 10}px)`;
    }

    rightButton.onclick = moveRocketImageRight;
    function moveRocketImageRight(){
       document.getElementById("rocket").style.transform = `translate(${x += 10}px)`;
    }

    upButton.onclick = moveRocketImageUp;
    function moveRocketImageUp(){
       document.getElementById("rocket").style.transform = `translate(0px, ${x -= 10}px)`;
       document.getElementById("spaceShuttleHeight").innerHTML = `${heightCounter += 10000}`;
    }

    downButton.onclick = moveRocketImageDown;
    function moveRocketImageDown(){
       document.getElementById("rocket").style.transform = `translate(0px, ${x += 10}px)`;
       document.getElementById("spaceShuttleHeight").innerHTML = `${heightCounter -= 10000}`;
    }

}

window.onload = init;

