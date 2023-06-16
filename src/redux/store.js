import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk"
import EmployeesReducer from './reducers/EmployeesReducer'



const store = createStore(combineReducers({
    employess: EmployeesReducer
}), {
    employess: []
},applyMiddleware(thunk))

export default store