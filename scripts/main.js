import { MineralHTML } from "./Mining.js"
import { Facilities } from "./Facilities.js"
import { ColonyResources } from "./ColonyResources.js"
import { shoppingCartDisplay } from "./ShoppingCart.js"

const indexTarget = document.querySelector("#mainContainer")

const renderHTML = () => {
    indexTarget.innerHTML = MineralHTML()
}

renderHTML()
