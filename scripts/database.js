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
    transientState: {
        facilityMineralObjectArray: [],
    }
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
    return database.transientState
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}


//This function will responding to the change when a governor is selected from the drop down 
//and setting transient state governorId to selected governor id
export const setGovernor = (governorEventId) => {
    database.transientState.governorId = governorEventId
    //invoke setGovernorName - adds a governor name and returns governorObject 
    const foundGovernorObject = setGovernorName()
    ///invoke setColonies function to add colonyId, colonyName
    setColonies(foundGovernorObject)
    
    const selectedGovna = new CustomEvent("governorChanged")
    document.dispatchEvent(selectedGovna)
}

const setGovernorName = () => {
    //use .find method to iterate through the governors array and save to a new variable 
    const foundGovernorObject = database.governors.find(governorObject => {
        // transientObject.governorsId matches the governor.id on each governor on the governors array    
        return database.transientState.governorId === governorObject.id
    })
    //add governorName property to transientState and set equal to foundGovernorObject.name
    database.transientState.governorName = foundGovernorObject.name
    return foundGovernorObject
}



//This function will be invoked within setGovernor to add colonyId and colonyName to transient state
const setColonies = (foundGovernorObject) => {
    database.transientState.colonyId = foundGovernorObject.colonyId
    //use .find() to iterate through colonies and return an object with colonyId matching paramter ID
    const foundColonyObject = database.colonies.find (colony => {
        return colony.id === foundGovernorObject.colonyId
    })
    database.transientState.colonyName = foundColonyObject.name
}


//This function adds facilityId and facilityName to the transient state
export const setFacility = (facilityEventId) => {
    database.transientState.facilityId = parseInt(facilityEventId)
    
    const foundFacilityObject = database.facilities.find(facilityObject => {
        return database.transientState.facilityId === facilityObject.id
    })
    database.transientState.facilityName = foundFacilityObject.name
    
    const selectedFacility = new CustomEvent("facilityChanged")
    document.dispatchEvent(selectedFacility)
}

export const setFacilityMineral = (facilityMineralEventId) => {
    //iterate through facilityMinerals 
    const foundFacilityMineralObject = database.facilityMinerals.find(facilityMineral =>{
        //check - does parameter id match facility mineral id
        return facilityMineralEventId === facilityMineral.id
    })
    //push that object to the new array in the transient state
    database.transientState.facilityMineralObjectArray.push(foundFacilityMineralObject)
    //dispatch Event
    document.dispatchEvent(new CustomEvent("facilityMineralChanged"))
}


// this function invokes the subtractFacilityMineral function and addColonyMineral function
export const purchaseMineral = () => {
    database.transientState.facilityMineralObjectArray.forEach(facilityMineralObject => {
        subtractFacilityMineral(facilityMineralObject.id)
        addColonyMineral(facilityMineralObject)

    })
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

//const subtractFacilityMineral = () => {
    // use for of loop or forEach method to iterate through the facilityMineralsArray
        // add a conditional that checks if the transientState.facilityMineralObject.id matches facilityMineral.id
            // facilityMineral.tonage -= 1
//}

const subtractFacilityMineral = (facilityMineralObjectId) => {
    database.facilityMinerals.forEach(facilityMineral => {
        if(facilityMineralObjectId === facilityMineral.id){
            facilityMineral.tonage --
        }
    })
}

const addColonyMineral = (facilityMineralObject) => {

    const foundColonyMineralObject = database.colonyMinerals.find(colonyMineral => {
        if(database.transientState.colonyId === colonyMineral.colonyId && facilityMineralObject.mineralId === colonyMineral.mineralId){
            return true
        } else {
            return undefined
        }})
    
    if(foundColonyMineralObject === undefined){
        createNewColonyMineralObject(facilityMineralObject)
    } else {
        for(const colonyMineral of database.colonyMinerals) {
            if(colonyMineral.id === foundColonyMineralObject.id){
                colonyMineral.tonage++
            }
        }
    }
    }

//const createNewColonyMineralObject = () => {
    //const lastIndex = colonyMinerals.length -1
    //const newId = colonyMinerals[lastIndex].id + 1
    //const newColonyMineralObject = {
        // id: newId,
        // colonyId: database.transientState.colonyId,
        // mineralId: database.transientState.mineralId
        // tonage: 1
    //database.colonyMinerals.push(newColonyMineralObject)


const createNewColonyMineralObject = (facilityMineralObject) => {
    const lastIndex = database.colonyMinerals.length -1
    const newId = database.colonyMinerals[lastIndex].id +1
    const newColonyMineralObject = {
        id: newId,
        colonyId: database.transientState.colonyId,
        mineralId: facilityMineralObject.mineralId,
        tonage: 1,
    }
    database.colonyMinerals.push(newColonyMineralObject)
}

