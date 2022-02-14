//the purpose of this module is to export a function that returns OH SHIT I DON'T THINK WE NEED THIS MODULE AT ALL

// import getMinerals from database
import { getMinerals } from "./database.js"

// store function in local variable
const minerals = getMinerals()

// export function that returns html element
export const Minerals = () => {
    // declare variable for interpolated string
    const interpolatedString = `<ul>
    ${
        // use map method to return list of minerals
        // set input type to service so returned data is displayed in a drop down box
        minerals.map(mineral => {
            return `<li>
            <input type="service" name="mineral" value ="${mineral.id}" /> ${mineral.name}
        </li>`
    })
}
</ul>`
// return string variable
return interpolatedString
}

//This module will create a radio input box for facility resources

//Import resources from database

//Add event listener for when a facility is selected
    //When selected, invoke function below

//Create a function to add radio inputs showing what minerals are available at a facility
    //Define a variable to store empty HTML string
    //Add radio buttons 
    //Use map.() to list resources and tonage at chosen facility
    //Return html string