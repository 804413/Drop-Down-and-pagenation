import React, { useState } from 'react'
import Dropdown from './Dropdown'
import "./Form.css"

 function Form() {
  const[firstName,setFirstName]=useState("")
  const[secondName,setSecondName]=useState("")

  const firstHandler=(e)=>{
    setFirstName(e.target.value)
  }
  const secondHandler=(e)=>{
    setSecondName(e.target.value)
  }

  
  return (
   <>
   <div className='form'>
    <form className='formbody'>
    <h1>Registration Form </h1>
      <label>First NAme</label> <br/>
      <input type="text" placeholder='Enter First NAme' onChange={firstHandler} value={firstName}/><br/>
      <label>Seconf NAme</label> <br/>
      <input type="text" placeholder='Enter Second NAme' onChange={secondHandler} value={secondName}/>
      <Dropdown/>
      <button type='submit'>Submit</button>
    </form>
   </div>
   </>
  )
}
export default Form