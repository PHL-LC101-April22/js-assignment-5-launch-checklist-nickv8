// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

    if (testInput === "") {
        console.log('Empty');
        return "Empty";
    
    } else if (isNaN(testInput) === true) {
        return 'Not a number'
    } else {
        return 'Is a number'
    }
   
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        pilot = document.querySelector("input[name=pilotName]").value;
        copilot = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoLevel = document.querySelector("input[name=cargoMass").value;
        list = document.getElementById("faultyItems");

        let validatePilot = validateInput(pilot);
        let validateCopilot = validateInput(copilot);
        let validateCargoLevel = validateInput(cargoLevel);
        let validateFuelLevel = validateInput(fuelLevel);

    
        if (validatePilot === 'Empty' || validateCopilot === 'Empty' || validateCargoLevel === 'Empty' || validateFuelLevel === 'Empty') {
            alert('Form must be filled out')
            return event.preventDefault()
        };

        if (validatePilot === 'Is a number' || validateCopilot === 'Is a number') {
            alert('Pilot name or Copilot name cannot be a number')
            return event.preventDefault()
        };

        if (validateCargoLevel === 'Not a number' || validateFuelLevel === 'Not a number') {
            alert('Cargo Mass or Fuel Level must be a number')
            return event.preventDefault()
        };

        
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargoStatus = document.getElementById("cargoStatus");
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for Launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for Launch`;
            
       
        list.style.visibility = "visible";
       
        if (fuelLevel < 10000) {
                fuelStatus.innerHTML = 'Fuel level is not high enough for Launch';
                launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
                launchStatus.style.color = 'red';
        } else if (cargoLevel > 10000) {
            cargoStatus.innerHTML = 'Cargo mass is too large to Launch';
            launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
            launchStatus.style.color = 'red';
        } else {
            launchStatus.style.color = 'green';
            launchStatus.innerHTML = 'Shuttle ready for Launch'
        };

         


        


        
            if (list.style.visibility = "visible") {
                event.preventDefault()
        }

    })
   
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
