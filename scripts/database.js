const database = {
    governors: [
        {
            id: 1,
            name: "Elliot Spitzer",
            colonyId: 3,
            active: true,
        },
        {
            id: 2,
            name: "Mark Sanford",
            colonyId: 1,
            active: true,
        },
        {
            id: 3,
            name: "Rick Santorum",
            colonyId: 3,
            active: true,
        },
    ],
    colonies: [
        {
            id: 1,
            name: "Starship",
        },
        {
            id: 2,
            name: "Death Star",
        },
        {
            id: 3,
            name: "Moon Base",
        },
    ],
    minerals: [
        {
            id: 1,
            name: "Lithium",
        },
        {
            id: 2,
            name: "Cobalt",
        },
        {
            id: 3,
            name: "Silicon",
        },
    ],
    facilities: [
        {
            id: 1,
            name: "Red Facility",
            active: true,
        },
        {
            id: 2,
            name: "Blue Facility",
            active: true,
        },
        {
            id: 3,
            name: "Yellow Facility",
            active: true,
        },
    ],
    facilityMinerals: [
        {
            id: 1,
            mineralId: 3,
            facilityId: 2,
            tonage: 100

        },
        {
            id: 2,
            mineralId: 1,
            facilityId: 2,
            tonage: 50

        },
        {
            id: 3,
            mineralId: 3,
            facilityId: 1,
            tonage: 95,

        },
        {
            id: 4,
            mineralId: 2,
            facilityId: 3,
            tonage: 115
        },
    ],
    colonyMinerals: [
        {
            id: 1,
            colonyId: 3,
            mineralId: 2,
            tonage: 1700

        },
        {
            id: 2,
            colonyId: 1,
            mineralId: 2,
            tonage: 66

        },
        {
            id: 3,
            colonyId: 3,
            mineralId: 1,
            tonage: 65,

        },
        {
            id: 4,
            colonyId: 2,
            mineralId: 3,
            tonage: 34
        },
    ],
    transientState: {}
}


export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

export const getfacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}

export const getTransientState = () => {
    return database.transientState.map(tState => ({...tState}))
}

export const setFacility = (facilityEventId) => {
    database.transientState.facilityId = facilityEventId
    const selectedFacility = new CustomEvent("facilityChanged")
    document.dispatchEvent(selectedFacility)
}

export const setGovernor = (governorEventId) => {
    database.transientState.governorId = governorEventId
    //find function takes in governorId and returns a governorObject with matching id
    const foundGovernorObject = database.governors.find(governor => {
        return governor.id === governorEventId

    })
    const selectedGovna = new CustomEvent("governorChanged")
    document.dispatchEvent(selectedGovna)

}
    
        //find function takes in foundGovernorObject.colonyID and returns a colonyObject with matching id
 //   const foundColony = database.colonies.find(colony => {
 //       return colony.id === foundGovernorObject.colonyId
  //  })

    //create colonyId property in transientState that equals foundGovernorObject.colonyId
 //   database.transientState.colonyId = foundGovernorObject.colonyId

    //create colonyName property in transientState that equals foundColony.name
 //   database.transientState.colonyName = foundColony.name

    //create governorName property in transientState that equals foundGovernorObject.name
//    database.transientState.governorName = foundGovernorObject.name



    



export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

