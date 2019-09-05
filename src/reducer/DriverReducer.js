
const initState =
{
    insurant:
    {
    },
    owner:
    {
    },
    drivers: [],
    unlimitedDrivers: false,
    insurantIsOwner: false,
    ownerIsDriver: false
}

const DriverReducer = (state = initState, action) => {
    switch (action.type) {
        case "EDIT_PERSON":
            let s =
            {
                ...state,
                [action.data.key]: action.data.person
            }
            if (state.insurantIsOwner)
                s.owner = Object.assign({}, state.insurant);
            if (state.ownerIsDriver)
                s.drivers[0] = Object.assign({}, s.owner);
            return s;
        case "DRIVER_CHANGED":
            
            return {
                ...state,
                drivers: state.drivers.map((d, index) => index == action.data.number ? action.data.person : d),
                ownerIsDriver: action.data.number == 0 && state.owner == action.data.person
            }

        case "DRIVER_COUNT_CHANGE":
            let ar = new Array(Number(action.data));
            ar.fill({});
            return {
                ...state,
                drivers: ar,
                unlimitedDrivers: false
            }

        case "UNLIMITED_DRIVERS":
            return {
                ...state,
                drivers: action.data ? [] : state.drivers.slice(),
                unlimitedDrivers: action.data
            }

        case "INSURANT_IS_OWNER":
            return {
                ...state,
                owner: action.data ? Object.assign({}, state.insurant) : Object.assign({}, state.owner),
                drivers: state.drivers.map((d, index) => index == 0 && action.data ? state.insurant : d),
                insurantIsOwner: action.data
            }

        case "OWNER_IS_DRIVER":
            let oneDriver = Array(1);
            oneDriver[0] = Object.assign({}, state.owner);
            return {
                ...state,
                drivers: action.data ? oneDriver : state.drivers.slice(),
                ownerIsDriver: action.data,
                unlimitedDrivers: action.data ? false : state.unlimitedDrivers
            }
        default:
            return state;
    }
}

export default DriverReducer;