import './addEmployees.css'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'




const AddEmployess = () => {
  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    console.log(data)
    data.id = Math.random()
    dispatch({type: "ADD", payload: data})
    fetch("https://rocky-temple-83495.herokuapp.com/employees",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
  }


  
  const { register, handleSubmit, formState: {errors} } = useForm()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", {required: "Enter Name"})} placeholder="name"/>
        <span>{errors.name?.message}</span>
        <input {...register("surname", {required: "Enter Surname"})} placeholder="surname"/>
        <span>{errors.surname?.message}</span>
        <input {...register("email", {required: "Enter Email"})} placeholder="email"/>
        <span>{errors.email?.message}</span>
        <input {...register("position", {required: "Enter Position"})} placeholder="position"/>
        <span>{errors.position?.message}</span>
        <input id='submit' type='submit'/>
    </form>
  )
}

export default AddEmployess