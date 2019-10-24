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

    leftButton.onclick = moveRocketImageLeft;
    function moveRocketImageLeft(){
       document.getElementById("rocket").style.paddingLeft = "10px";
    }

    rightButton.onclick = moveRocketImageRight;
    function moveRocketImageRight(){
       document.getElementById("rocket").style.paddingRight = "10px";
    }

    upButton.onclick = moveRocketImageUp;
    function moveRocketImageUp(){
       document.getElementById("rocket").style.paddingBottom = "10px";
       document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }

    downButton.onclick = moveRocketImageBottom;
    function moveRocketImageBottom(){
       document.getElementById("rocket").style.paddingTop = "10px";
       document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }

}

window.onload = init;

