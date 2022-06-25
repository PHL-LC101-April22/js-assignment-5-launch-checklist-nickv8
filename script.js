// Write your JavaScript code here!




window.addEventListener("load", function () {
    
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let fuelStatus = document.getElementById('fuelStatus');
    fuelStatus.textContent = "Fuel level high enough for launch";

   let form = document.querySelector("form");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let planet = pickPlanet(listedPlanets);
       

       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
       
   })
    
    

    form.addEventListener("submit", function (event) {
        
        
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass").value;
        
       

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

        event.preventDefault()
        
    
    }); 
        
   

    
    
   
});