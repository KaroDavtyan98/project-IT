import { NavLink } from 'react-router-dom'
import './header.css'


const Header = () => {
  return (
    <div className='header'>
        <ul className='lists'>
            <NavLink to={'/employees'}>EMPLOYEES</NavLink>
            <NavLink to={'/tasks'}>TASKS</NavLink>
        </ul>
    </div>
  )
}

export default Header
