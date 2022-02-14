//The purpose of this module is to create a drop down menu with facilities and invoke setFacilities when a governor has been selected

//Import facilities from database
//Import setFacilities from datatbase
//Import getFacilityMinerals from database
//Import getMinerals from database
//Import setFacilityMineral from database
import { getFacilities, getfacilityMinerals, setFacility, setFacilityMineral } from "./database.js"

// save getMinerals to a local variable

// save getFacilities to a local variable
const facilities = getFacilities()


const targetHTMLfacilities = document.querySelector("#facilitiesSelectBox")


//Create an event listener to listen for governorChanged in the document
document.addEventListener(
    //When governorChanged in the document is heard
    "governorChanged",
    (changeEvent) => {
        //Invoke Facilities function to produce a drop down menu with facilities
        targetHTMLfacilities.innerHTML = Facilities()
    }
)



//*****This function creates dropdown box */

//Create a function to produce a drop down menu with facilities
const Facilities = () => {
    //Define a string variable with a select HTML element - this element will have an id of FACILITIES
    let html = `<select id="FACILITIES">`
    //Use map array method to create a new array of facilities with option HTML elements
    const listItems = facilities.map(
        (facility) => {
            //These elements will have a value of facilityId
            return `<option value="${facility.id}">${facility.name}</option>`
        })
    //Use .join() to convert array into string
    html += listItems.join("")
    //Close select HTML element
    html += "</select>"
    //Return the HTML string
    return html
}

            
//Create an event listener to listen for a change in the document
document.addEventListener(
    //When the change in the document is heard
    "change",
    (changeEvent) => {
        //Check if the id of the change === FACILITIES
        if (changeEvent.target.id === "FACILITIES") {
            //Invoke setFacility, passing in the value of the select HTML element (facilityId) as an argument
            setFacility(changeEvent.target.value)
        }
})



const targetHTMLfacilityInventory = document.querySelector(".facilityInventory")


//Create an event listener to listen for facilityChanged in the document
document.addEventListener(
    //When facilityChanged is heard
    "facilityChanged",
    (changeEvent) => {
        //Invoke facilityInventory function to produce radio buttons
        targetHTMLfacilityInventory.innerHTML = facilityInventory()
    }
)



//******** This function displays mineral inventory of selected facility with radio buttons */

//Create facilityInventory function to produce radio buttons with quantity of minerals at the selected facility 
const facilityInventory = () => {
    //Define variable to store transient state
    const transientObject = getTransientState() 
    //Define variable to store facilityMinerals
    const facilityMinerals = getfacilityMinerals()
    //Define html variable with header and append <ul>
    let html = `<h2>Facility Minerals for ${transientObject.FacilityName}</h2>`
    html+="<ul>"
    //Use .filter() through facilityMinerals to return a foundFacilityMineralsArray
    const foundFacilityMineralsArray = facilityMinerals.filter(facilityMineral => {
        //Check if transientObject.facilityId === facilityMinerals.facilityId
        return transientObject.facilityId === facilityMineral.facilityId
    })
    //Use forEach to iterate through foundFacilityMineralsArray
    foundFacilityMineralsArray.forEach(foundFacilityMineralObject => {
        //Use .find() through minerals array to return the current foundMineralObject
        const foundMineralObject = facilityMinerals.find(mineral => {
            //Check if mineral.id === foundFacilityMineralsArrayObject.mineralId
            return mineral.id === foundFacilityMineralsArrayObject.mineralId
        })
        html+=`<li> <input type="radio" id = "mineralSelection--${foundFacilityMineralObject.id}/> ${foundFacilityMineralObject.tonage} tons of ${foundMineralObject.name} </li>`
    })
    //close unordered list              
    html+=`</ul>`
    //Return ul string
    return html
}

 
document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id.startsWith("mineralSelection")){
            const [,id] = changeEvent.target.id.split("--")
            setFacilityMineral(id)
        }
    }
)