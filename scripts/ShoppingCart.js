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

    // use find to iterate through the minerals array
        // return foundMineralObject where mineral.id === transientstate.facilityMineralObject.mineralId
    const foundMineralObject = minerals.find(mineral => {return mineral.id === transientObject.mineralId})

    //set the content target to the innerHTML equal to an interpolated string that reads "1 ton of ${"foundMineralObject.name}
    // use querySelector to target the html element in mining.js that matches this id: spaceCartOutput
    // save querySelecot to new variable
const cartOutputTarget = document.querySelector("#spaceCartOutput")
    cartOutputTarget.innerHTML = `1 ton of ${foundMineralObject.name}`
}

// add eventListener to the purchaseButton
    // if the purcahseButton is clicked
        // invoke the purchaseMineral function in database.js

document.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "purchaseButton"){
            purchaseMineral()
        }
    }
)