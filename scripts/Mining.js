//This module will generate html for all main HTML elements 

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
                <select id="governorSelectBox">
                <option value="0">Select a Governor</option>
                    ${Governors()}
                    </select>
                <select id="facilitiesSelectBox">
                        <option value="0">Select a Facility</option>
                </select>
            </div>
            
            <div class="colonyResources">
                <h2 id="colonyMineralsH2"> Colony Minerals </h2>
                -----add function for colony resources box----
            </div>

        </section>

        

        <section class="mineralsAndCart">
            <div class="facilityMinerals">
                <select id="facilitiesSelectBox">
                    <option value="0">Select a Facility</option>
                </select>
            ------put facility minerals function here----
            </div>
            <div class="facilityInventory">
            </div>
            <div class="spaceCart">
                <h2>Space Cart</h2>
                <div id="spaceCartOutput"></div>
                <button id = "purchaseButton">Purchase Mineral</button>
            ------Put space cart function here----
            </div>
        </section>
    </article>
   
    `
}

