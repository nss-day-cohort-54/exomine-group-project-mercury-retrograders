//This module will generate html for all main HTML elements 

//Header h1 Solar System Mining Marketplace

//section w/ dropdown box for Governors 
//section w/ dropdown box for facilities

export const MineralHTML =() => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <article id="mainContainer">
        <section class="governorBox">
        </section>

        <section class="facilityBox">
        -----add function for facility box----
        </section>

        <section class="colonyResources">
            <h2 id="colonyMineralsH2"> Colony Minerals </h2>
        -----add function for colony resources box----
        </section>

        <section class="mineralsAndCart">
            <div class="facilityMinerals">
            <select id="facilitiesSelectBox">
                <option value="0">Select a Facility</option>
            </select>
            ------put facility minerals function here----
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

