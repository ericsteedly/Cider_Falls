//look at each park Area and see what services are offered there
//look at each guest and see where they are in the park

//iterate through parkAreas, for each park look through all areaServices and compare serviceId
//return park name and servicesNames
import { getServices, getAreaServices, getParkArea } from "./database.js";

const parkAreas = getParkArea() 
const areaServices = getAreaServices()
const services = getServices()
//function to look at each park

export const ParkAreaName = () => {
//look at each park
//make empty array for services

        let html = ""                                            //need to initialize html here instead of within the loop, so that it on gets added to rather than reseting every time
    for (const park of parkAreas) {
        const parkServices = findServices(park)

        html += "<section class='park_card'>"                       //this line just needs to be "html += ....."
        html += `<h3>${park.name}</h3>
                 <h4>${park.location}</h4>
                 <h5>Services Offered:</h5>
                 <ul>`

//loop through parkServices.length to spit out each service
        for (let i=0; i < parkServices.length; i++) {
        html += `<li>${parkServices[i]}</li>`
        }

        html += "</ul></section>"
    }                                                              //return on line 35 actually does need to be in the outer bracket, so as not to exit the loop
    return html
}

// now look at each area-service event
const findServices = (currentPark) => {
    let servicesArray = []
    
    for (const object of areaServices) {
        if (currentPark.id === object.parkAreasId) {
            for (const service of services) {
                if (object.servicesId === service.id) {
                    servicesArray.push(service.type)
                }
            }
        }
    }  
    return servicesArray 
}




