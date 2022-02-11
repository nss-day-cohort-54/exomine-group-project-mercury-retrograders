// the purpose of this module is to display - Colony Minerals in an h2 as a default and
// Colony Minerals will change when governor is chosen

//import setGovernors
//import getMinerals
//import getTransientState
//import getColonyMinerals
//import setColonyMinerals



//create an event listener to listen for  "governorChange" in the document
    // when "governorChange" is heard
        // invoke the ColonoyResources function that returns an html interpolated string- Includes inventory for each colony and the h2 updated colony name

// use querySelector or getElementById to target the "colonyResources" section in mining.js
//using querySelector to repopulate the colonyResources section with the new html

//Create a function - ColonyResources that returns the html for Colony Name and the inventory in an interpolated string
    //getTransientState
    //getColonyMinerals

    
    //declare an html variable that will be an h2 element with colony.name + Minerls
        //<h2> ${transientStateObject.colonyName}'s Minerals </h2>



        // declare  variable foundMineralObjectArray  use the filter method to  colonyMineralsObjectsArray
/*
transstate has 
    governorId
    governorName
    colonyId
    colonyName

colonyMineralObject
    id
    colonyId
    mineralId
    tonage
*/
            //return an array of all objects with colonyMineralObject.colonyId matches transientStateObject.colonyId
            //invoke setColonyMinerals function with returned array as a parameter
        // html += <ul> appeending the unordered list element to the html string 
        //Use forEach method to iterate through foundMineralObjectArray to create a new list of colony resource items
                //interate through minerals array use find method to return  mineral object with an id that matches colonyMineralObject.mineralId
                
                //foundMineralObject {
                    //id
                    //name
                //}
                //append the list item element to the html string
                `<li class="colonyResourcesList"> ${ number} tons of ${mineral name} </li>`

 
        //Close ul HTML element
        //Return the HTML string
        


    









