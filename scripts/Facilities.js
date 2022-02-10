//The purpose of this module is to create a drop down menu with facilities and invoke setFacilities when a governor has been selected

//Import facilities from database
//Import setFacilities from datatbase
//Import getFacilityMinerals from database
//Import getMinerals from database

// save getMinerals to a local variable

// save getFacilities to a local variable

//Create an event listener to listen for governorChanged in the document
    //When governorChanged in the document is heard
        //Invoke Facilities function to produce a drop down menu with facilities



//*****This function creates dropdown box */

//Create a function to produce a drop down menu with facilities
    //Define a string variable with a select HTML element 
    //This element will have an id of FACILITIES
    //Use map array method to create a new array of facilities with option HTML elements
        //These elements will have a value of facilityId
    //Use .join() to convert array into string
    //Close select HTML element
    //Return the HTML string
            
//Create an event listener to listen for a change in the document
    //When the change in the document is heard
    //Check if the id of the change === FACILITIES
        //Invoke setFacilities, passing in the value of the select HTML element (facilityId) as an argument


//Create an event listener to listen for facilityChanged in the document
    //When facilityChanged is heard
        //Invoke facitlityInventory function to produce radio buttons


//******** This function displays mineral inventory of selected facility with radio buttons */

//Create facilityInventory function to produce radio buttons with quantity of minerals at the selected facility 
    //transientObject = getTransientState() 
    //facilityMinerals = getFacilityMinerals()

    
    let html = `<h2>Facility Minerals for ${transientObject.FacilityName}</h2>`
    html+="<ul>"
    //Use .filter() through facilityMinerals to return a foundFacilityMineralsArray
        //To check if transientObject.facilityId === facilityMinerals.facilityId
    //Use forEach to iterate through foundFacilityMineralsArray
        //Use .find() through minerals array to return the current foundMineralObject
            //To check if mineral.id === foundMineralObject.mineralId
        html+=`<li> <input type="radio" id = "mineralSelection--${foundMineralObject.id}/> ${foundFacilityMineral.tonage} tons of ${foundMineralObject.name} </li>`
                        
    html+=`</ul>`

    //Return ul string




    /*
    document.addEventListener(
        "change",
        (changeEvent) => {
            if(changeEvent.target.id.startsWith("mineral")){
                const [,id] = changeEvent.target.id.split("--")
                setFacilityMineral(id)
                setMineralId(changeEvent.target.value)
            }
        }
    )

    */