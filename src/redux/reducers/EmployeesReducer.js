function EmployeesReducer (state=[], action) {
    if(action.type === "DATA"){
        return action.payload
    }else if (action.type === "ADD"){
        console.log(action.payload)
        return [
            ...state,
            action.payload
        ]
    }else if (action.type === "DELETE"){
        return state.filter((person) => {
           return person.id !== action.payload
        })
    }
    return state
}

export default EmployeesReducer