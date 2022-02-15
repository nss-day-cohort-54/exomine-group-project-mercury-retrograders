//The purpose of this module is to produce a message to the shopping cart and modify the facilityMinerals and colonyResources once the purchase button is clicked

// import transientState and minerals from database
import { getTransientState, getMinerals, purchaseMineral } from "./database.js";

const minerals = getMinerals()




//Add eventListener to document listening for "facilityMineralChanged"
    // once facilityMineralChanged is heard
        // invoke shoppingCartDisplay function

document.addEventListener(
    "facilityMineralChanged",
    (customEvent) => {
        shoppingCartDisplay()
    })

// create a shoppingCartDisplay function that prints the shopping cart display message 
    //representing 1 ton of whichever facilityMineral the user chose

export const shoppingCartDisplay = () => {

    // invoke the transientState and save to a variable
    const transientObject = getTransientState()

    let html = "<ul>"

    transientObject.facilityMineralObjectArray.forEach(facilityMineralObject =>{
        // use find to iterate through the minerals array
        const foundMineralObject = minerals.find(mineral => {
            // return foundMineralObject where mineral.id === transientstate.facilityMineralObject.mineralId
            return mineral.id === facilityMineralObject.mineralId})
        html += `<li>1 ton of ${foundMineralObject.name}</li>`
        })
        html += "</ul>"
        //set the content target to the innerHTML equal to an interpolated string that reads "1 ton of ${"foundMineralObject.name}
        // use querySelector to target the html element in mining.js that matches this id: spaceCartOutput
        // save querySelecot to new variable
        const cartOutputTarget = document.querySelector("#spaceCartOutput")
        cartOutputTarget.innerHTML = html
        

}

// add eventListener to the purchaseButton
    // if the purcahseButton is clicked
        // invoke the purchaseMineral function in database.js

document.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "purchaseButton"){
            purchaseMineral()
            const cartOutputTarget = document.querySelector("#spaceCartOutput")
            cartOutputTarget.innerHTML = ``
        }
    }
)