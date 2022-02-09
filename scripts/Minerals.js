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