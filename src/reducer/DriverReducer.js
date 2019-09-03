
const initState =
{
    insurant:
    {
    },
    owner:
    {
        firstName: "sdffff"
    },
    drivers: [{}, {}, {}, {}, {}]
}

const DriverReducer = (state = initState, action) => {
    switch (action.type) {
        case "EDIT_PERSON":
            let s =
            {
                ...state,
                [action.data.key]: action.data.person
            }
            return s;
        case "DRIVER_CHANGED":
            return {
                ...state,
                drivers: state.drivers.map((d, index) => index == action.data.number ? action.data.person : d)
            }
        default:
            return state;
    }
}

export default DriverReducer;