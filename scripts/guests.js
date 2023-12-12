//look at each guest and see where they are in the park

import {getGuests} from "./database.js"

const guests = getGuests()


export const GuestsList = () => {
   let guestsHTML = `<ul id="guest-list">`

    for (const guest of guests ) {
        guestsHTML += `<li data-parkID="${guest.parkAreasId}">${guest.firstNameLastName}</li>`
    }
    guestsHTML += `</ul>`
    return guestsHTML
}