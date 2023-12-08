//create main html in main js, where we can call functions to import the rest of the html
import { GuestsList } from "./guests.js"
import { ParkAreaName } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = 
`<article id="areas_main">
${ParkAreaName()}
</article>
<aside class = "guests">
<h2>Guest List</h2>
${GuestsList()}
</aside>
`


mainContainer.innerHTML = applicationHTML