//The purpose of this module is to produce an HTML element of governor selections

//Import governors array and setGovernor function from database
import { getGovernors, setGovernor } from "./database.js";

//Define variable to store governors array
const governors = getGovernors()

//Create function to produce drop down menu containing governors
export const Governors = () => {
    //Create let html
    let html = `<select id = "governorsSelectBox">
    <option value = "0">Select a Governor...</option>`
   //Use map.() array method to list governors
    const arrayOfGovernors = governors.map( (governor) => {
    //Add drop down menu options to ^ select element with id = governorId
        return `<option value="${governor.id}">${governor.name}</option>`
    })
    //Use .join method to convert returned array to string
    html += arrayOfGovernors.join("")
    html += `</select>`
    //Return html string
    return html
    }

//Create event listener to invoke setGovernors function in database
document.addEventListener(
    //listening for a "change" in the document
    "change",
    (event) => {
        //checking to see if change target.id === GOVERNORS
        if (event.target.id === "governorsSelectBox") {
            //If so, invoke setGovernor function and pass in select value (which is governorID of the chosed option)
            setGovernor(parseInt(event.target.value))
        }
    }
)