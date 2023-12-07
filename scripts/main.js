//create main html in main js, where we can call functions to import the rest of the html
import { GuestsList } from "./guests.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = 
`<aside class = "guests">
<h2>Guest List</h2>
${GuestsList()}
</aside>
`

mainContainer.innerHTML = applicationHTML