// the purpose of this module is to display - Colony Minerals in an h2 as a default and
// Colony Minerals will change when governor is chosen

//import setGovernors
//import getMinerals ?? getFacilityMinerals
//import getTransientState
//import getColonyMinerals
//import setColonyMinerals
import { getColonyMinerals } from "./database.js"
import { getTransientState } from "./database.js"
import { getMinerals } from "./database.js"


//create an event listener to listen for  "governorChange" in the document
    // when "governorChange" is heard
        // invoke the ColonoyResources function that returns an html interpolated string- Includes inventory for each colony and the h2 updated colony name


document.addEventListener(
    "governorChanged",
    (changeEvent) => {
        //use querySelector to repopulate the colonyResources section with the new html
        const targetHTML = document.querySelector(".colonyResources")
        targetHTML.innerHTML = ColonyResources()
    }
)


//Create a function - ColonyResources that returns the html for Colony Name and the inventory in an interpolated string
export const ColonyResources = () => {
    //getTransientState  //getColonyMinerals //getMinerals
    const transientStateObject = getTransientState()
    const colonyMineralsObjectsArray = getColonyMinerals()
    const mineralsArray = getMinerals()

    //declare an html variable that will be an h2 element with colony.name + Minerals //<h2> ${transientStateObject.colonyName}'s Minerals </h2>
    let html = `<h2>${transientStateObject.colonyName}'s Minerals</h2>`

    // declare  variable foundMineralObjectArray  use the filter method to  colonyMineralsObjectsArray
    const foundColonyMineralObjectArray = colonyMineralsObjectsArray.filter(colonyMineralObject => {
        //return an array of all objects with colonyMineralObject.colonyId matches transientStateObject.colonyId
        return colonyMineralObject.colonyId === transientStateObject.colonyId
    })
    // html += <ul> appending the unordered list element to the html string 
    html += "<ul>"

    //Use forEach method to iterate through foundMineralObjectArray to create a new list of colony resource items
    foundColonyMineralObjectArray.forEach(foundColonyMineralObject => {
        //interate through minerals array use find method to return  mineral object with an id that matches colonyMineralObject.mineralId
        const foundMineralObject = mineralsArray.find(mineralObject =>{
            return mineralObject.id === foundColonyMineralObject.mineralId
        })
        //append the list item element to the html string
        //    `<li class="colonyResourcesList"> ${ number} tons of ${mineral name} </li>`
            html += `<li class="colonyResourcesList"> ${foundColonyMineralObject.tonage} tons of ${foundMineralObject.name}</li>`
    })

    //Close ul HTML element
        html += "</ul>"
    //Return the HTML string
        return html

}


        
        


    









