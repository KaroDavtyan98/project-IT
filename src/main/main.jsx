import { Route, Routes } from 'react-router-dom'
import './main.css'
import Employees from '../pages/employees/employees'
import Tasks from '../pages/tasks/tasks'

const Main = () => {
  return (
    <Routes>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
    </Routes>
  )
}

export default Main
