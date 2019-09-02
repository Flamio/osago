const DriverReducer = (state = { persons: [] }, action) => {
    switch (action.type) {
        case "EDIT_PERSON":
            let s = 
            {
                ...state
            }            
            s.persons[action.data.key] = action.data.person;
            return s;
        default:
            return state;
    }
}

export default DriverReducer;