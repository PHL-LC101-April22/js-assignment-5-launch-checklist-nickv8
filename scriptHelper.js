// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let div = document.getElementById("missionTarget");
    planetName = name;
    planetDiameter = diameter;
    planetStar = star;
    planetDistance = distance;
    planetMoons = moons;
    planetImageUrl = imageUrl;



   // Here is the HTML formatting for our mission target div.
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planetName} </li>
                    <li>Diameter: ${planetDiameter} </li>
                    <li>Star: ${planetStar}</li>
                    <li>Distance from Earth: ${planetDistance} </li>
                    <li>Number of Moons: ${planetMoons} </li>
                </ol>
                <img src="${planetImageUrl}"> `;
   
};

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    
    } else if (isNaN(testInput) === true) {
        return 'Not a Number'
    } else {
        return 'Is a Number'
    }
   
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

       
   

        let validatePilot = validateInput(pilot);
        let validateCopilot = validateInput(copilot);
        let validateCargoLevel = validateInput(cargoLevel);
        let validateFuelLevel = validateInput(fuelLevel);

    
        if (validatePilot === 'Empty' || validateCopilot === 'Empty' || validateCargoLevel === 'Empty' || validateFuelLevel === 'Empty') {
            alert('Form must be filled out')
            //work this out, how to stop window from refreshing
            
            
        };

        if (validatePilot === 'Is a Number' || validateCopilot === 'Is a Number') {
            alert('Pilot name or Copilot name cannot be a number')
            //stop window from refreshing
            
        };

        if (validateCargoLevel === 'Not a Number' || validateFuelLevel === 'Not a Number') {
            alert('Cargo Mass or Fuel Level must be a number')
            //stop window from refreshing
            
        };

        
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            
       
        
       
        if (fuelLevel < 10000) {
            list.style.visibility = "visible";
            fuelStatus.textContent = 'Fuel level too low for launch';
            launchStatus.textContent = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
        } else {
            fuelStatus.textContent = "Fuel level high enough for launch"
        };
    
        if (cargoLevel > 10000) {
            list.style.visibility = "visible";
            cargoStatus.textContent = 'Cargo mass too heavy for launch';
            launchStatus.textContent = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)'; 
         };
  
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = 'rgb(65, 159, 106)';
        launchStatus.textContent = 'Shuttle is Ready for Launch';
        fuelStatus.textContent = 'Fuel level high enough for launch';
        cargoStatus.textContent = 'Cargo mass low enough for launch';

    };
   
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");

    return planetsReturned.json();
};

function pickPlanet(planets) {
    let num = Math.floor(Math.random() * planets.length)
    return planets[num]
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
