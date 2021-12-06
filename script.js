// Write your JavaScript code here!



window.addEventListener("load", function(){

    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planets =pickPlanet(listedPlanets) //getting a list of all planets and selecting 1 at random
       addDestinationInfo(document, planets.name, planets.diameter, planets.star, planets.distance, planets.moons, planets.image)
   })

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden"

    form.addEventListener("submit", function(event){
        event.preventDefault()

        let pilotInput = document.querySelector("input[name=pilotName]")
        let pilot = pilotInput.value

        let copilotInput = document.querySelector("input[name=copilotName]")
        let copilot = copilotInput.value

        let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
        let fuelLevel = Number(fuelLevelInput.value)

        let cargoLevelInput = document.querySelector("input[name=cargoMass")
        let cargoLevel = Number(cargoLevelInput.value)

        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
     })
   
})