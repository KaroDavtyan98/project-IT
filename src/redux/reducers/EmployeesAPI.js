export function EmployeesAPI () {
    return async function (dispatch, getState) {
        const res = await fetch("https://rocky-temple-83495.herokuapp.com/employees")
        const data = await res.json();
        dispatch({type:"DATA", payload: data})
        console.log(data)
    }
}