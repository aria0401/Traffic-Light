"use strict";

function startTrafficLights(){
    setColor(["red"]);
    setTimeout(setColor, 3000, ["red", "yellow"]);
    setTimeout(setColor, 6000, ["green"]);
    setTimeout(setColor, 9000, ["yellow"]);
    setTimeout(startTrafficLights, 12000);
}

startTrafficLights();

function setColor(colorsArray){
    const lights = document.querySelectorAll(".light_box div");
    
    lights.forEach((light)=>{
        const trafficLight = light.classList;
        const lightON =  colorsArray.find(elem => elem == light.dataset.color)
        trafficLight.contains(lightON)? trafficLight.remove("light_off") : trafficLight.add("light_off");
       })
}



