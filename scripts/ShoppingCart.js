//The purpose of this module is to produce a message to the shopping cart and modify the facilityMinerals and colonyResources once the purchase button is clicked

// import transientState
// import minerals array

// use querySelector to target the html element in mining.js that matches this id: spaceCartOutput
    // save querySelecot to new variable

//Add eventListener to document listening for "facilityMineralChanged"
    // once facilityMineralChanged is heard
        // invoke shoppingCartDisplay function
        

// create a shoppingCartDisplay function that prints the shopping cart display message 
    //representing 1 ton of whichever facilityMineral the user chose
    
    // invoke the transientState and save to a variable

    // use find to iterate through the minerals array
        // return foundMineralObject where mineral.id === transientstate.facilityMineralObject.mineralId

    //set the content target to the innerHTML equal to an interpolated string that reads "1 ton of ${"foundMineralObject.name}


// add eventListener to the purchaseButton
    // if the purcahseButton is clicked
        // invoke the purchaseMineral function in database.js