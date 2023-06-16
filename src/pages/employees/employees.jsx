import { useDispatch, useSelector } from 'react-redux'
import './employees.css'
import { useEffect } from 'react';
import { EmployeesAPI } from '../../redux/reducers/EmployeesAPI';
import AddEmployess from '../../components/addEmployees/addEmployess';



const Employees = () => {

  const dispatch = useDispatch();
  const {employess:employees} = useSelector(state => state)

  console.log(employees)

  useEffect(() => {
    dispatch(EmployeesAPI())
  },[])

  return (
    <div className='employees-main'>
        <AddEmployess/>
        <div className='section-person'>
            {employees && employees.map((person) => {
                  return (
                      <ul className='person-list' key={person.id}>
                         <li><b>Name:</b> {person.name}</li>
                         <li><b>Surname:</b> {person.surname}</li>
                         <li><b>Email:</b> {person.email}</li>
                         <li><b>Position:</b> {person.position}</li>
                         <div className='delUpd'>
                          <button onClick={() => {
                              dispatch({type:"DELETE", payload: person.id})
                              fetch(`https://rocky-temple-83495.herokuapp.com/employees/${person.id}`,{
                                method: "DELETE",
                                "content-type": "application/json"
                              })
                          }}>Delete</button>
                          <button>Update</button>
                         </div>
                      </ul>
                  )
            })}
        </div>
        
    </div>
  )

}

export default Employees
