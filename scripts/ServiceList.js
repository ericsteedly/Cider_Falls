import { getServices, getAreaServices, getParkArea } from "./database.js"

const areaServices = getAreaServices()
const parkAreas = getParkArea()


const services = getServices()
const parkServices = []
export const ServiceList = () => {
    let serviceListHTML = `<section class="servicesList">Park Services:`
    for (const service of services) {
        // parkServices.push(service.type)
        serviceListHTML += `<div class="serviceListItem" data-id="${service.id}" data-type="services" data-name="${service.type}">${service.type},</div>`
    }
    serviceListHTML += `</section>`
    return serviceListHTML
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "services") {
            let parkName = []
            //iterate through areaServices and comparing the id we clicked on with the areaServicesId
            for (const item of areaServices) {
                if (parseInt(itemClicked.dataset.id) === item.servicesId) {
                    for (const parkArea of parkAreas) {
                        if (item.parkAreasId === parkArea.id) {
                            parkName.push(parkArea.name)
                        }
                    }
                }
            }
            window.alert(`${itemClicked.dataset.name} is available in ${parkName.join(`, `)}`)
        }
    }
)