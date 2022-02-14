//This module will generate html for all main HTML elements 

import { ColonyResources } from "./ColonyResources.js"
import { Facilities, facilityInventory } from "./Facilities.js"
import { Governors } from "./Governors.js"


//Header h1 Solar System Mining Marketplace

//section w/ dropdown box for Governors 
//section w/ dropdown box for facilities

export const MineralHTML =() => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <article id="mainContainer">
        <section class="governorsAndColonyResources">
            <div class = "governors">
                ${Governors()}
            </div>
            
            <div class="colonyResources">
                <h2 id="colonyMineralsH2"> Colony Minerals </h2>
            </div>

        </section>

        <section class="mineralsAndCart">
            <div class="facilityMinerals">
                <select id="facilitiesSelectBox">
                    <option value="0">Select a Facility</option>
                </select>
            </div>
            <div class="facilityInventory">
            </div>
            <div class="spaceCart">
                <h2>Space Cart</h2>
                <div id="spaceCartOutput"></div>
                <button id = "purchaseButton">Purchase Mineral</button>
            </div>
        </section>
    </article>
   
    `
}

document.addEventListener(
    "stateChanged",
    (customEvent) => {
        const targetHTML = document.querySelector(".colonyResources")
        targetHTML.innerHTML = ColonyResources()
        const targetHTMLfacilityInventory = document.querySelector(".facilityInventory")
        targetHTMLfacilityInventory.innerHTML = facilityInventory()
        

    }
    )