const database = {
    parkArea: [
        {
            id:1,   
            location: "Northeast Section",
            name: "Chamfort River",
        },
        {
            id:2,
            location: "Northern Section",
            name: "Lost Wolf Hiking Trail",
        },
        {
            id:3,
            location: "Northwest Section",
            name: "Lodge"
        },
        {
            id:4,
            location: "Southwest Section",
            name: "Gander River"
        },
        {
            id:5,
            location: "Southern Section",
            name: "Campground"
        },
        {
            id:6,
            location: "Southeast Section",
            name: "Pine Bluffs Trails"
        }
    ],

    services: [
        {
            id: 1,
            type: "Hiking"
        },
        {
            id: 2,
            type: "Rafting"
        },
        {
            id: 3,
            type: "Canoeing"
        },
        {
            id:4,
            type: "Fishing"
        },
        {
            id:5,
            type: "Picnicking"
        },
        {
            id:6,
            type: "Rock Climbing"
        },
        {
            id:7,
            type: "Lodging"
        },
        {
            id:8,
            type: "Parking"
        },
        {
            id:9,
            type: "Info"
        },
        {
            id:10,
            type: "Child Play Area"
        },
        {
            id:11,
            type: "Zipline"
        },
        {
            id:12,
            type: "Park Office"
        },
        {
            id:13,
            type: "Food"
        }
    ],

    areaServices: [
        {
            id: 1,
            parkAreasId: 1,
            servicesId: 2
        },
        {
            id: 2,
            parkAreasId: 1,
            servicesId: 3
        },
        {
            id: 3,
            parkAreasId: 1,
            servicesId: 4
        },
        {
            id: 4,
            parkAreasId: 2,
            servicesId: 1
        },
        {
            id: 5,
            parkAreasId: 2,
            servicesId: 5
        },
        {
            id: 6,
            parkAreasId: 2,
            servicesId: 6
        },
        {
            id: 7,
            parkAreasId: 3,
            servicesId: 7
        },
        {
            id: 8,
            parkAreasId: 3,
            servicesId: 8
        },
        {
            id: 9,
            parkAreasId: 3,
            servicesId: 9
        },
        {
            id: 10,
            parkAreasId: 3,
            servicesId: 5
        },
        {
            id: 11,
            parkAreasId: 3,
            servicesId: 13
        },
        {
            id: 12,
            parkAreasId:4,
            servicesId: 1
        },
        {
            id: 13,
            parkAreasId: 4,
            servicesId: 4
        },
        {
            id: 14,
            parkAreasId: 5,
            servicesId: 7
        },
        {
            id: 15,
            parkAreasId: 5,
            servicesId: 8
        },
        {
            id: 16,
            parkAreasId: 5,
            servicesId: 9
        },
        {
            id: 17,
            parkAreasId: 5,
            servicesId: 10
        },
        {
            id: 18,
            parkAreasId: 5,
            servicesId: 12
        },
        {
            id: 19,
            parkAreasId:6,
            servicesId: 1
        },
        {
            id: 20,
            parkAreasId:6,
            servicesId: 5
        },
        {
            id: 21 ,
            parkAreasId:6,
            servicesId: 11
        },
        {
            id: 22,
            parkAreasId:6,
            servicesId: 13
        }
    ],

    guests: [
        {id: 1, firstNameLastName: "Ron Swanson", parkAreasId: 1 },
        {id: 2, firstNameLastName: "April Ludgate", parkAreasId: 5 },
        {id: 3, firstNameLastName: "Leslie Knope", parkAreasId: 2 },
        {id: 4, firstNameLastName: "Andy Dwyer", parkAreasId: 1},
        {id: 5, firstNameLastName: "Ben Wyatt", parkAreasId: 3},
        {id: 6, firstNameLastName: "Ann Perkins", parkAreasId: 6},
        {id: 7, firstNameLastName: "Jerry Gergich", parkAreasId: 5},
        {id: 8, firstNameLastName: "Tom Haverford", parkAreasId: 3 },
        {id: 9, firstNameLastName: "Chris Traeger", parkAreasId: 5},
        {id: 10, firstNameLastName: "Mark Brendanawocz", parkAreasId: 4}
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAreaServices = () => {
    return database.areaServices.map(serviceArea => ({...serviceArea}))
}

export const getParkArea = () => {
    return database.parkArea.map(area => ({...area}))
}







