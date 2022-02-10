import { MineralHTML } from "./Mining.js"

const indexTarget = document.querySelector("#mainContainer")

const renderHTML = () => {
    indexTarget.innerHTML = MineralHTML()
}

renderHTML()
