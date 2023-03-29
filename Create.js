                                                                                                                                                                                                                import './Create.css'

import React,{useState} from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

//import { Link } from 'react-router-dom';

export default function FormExampleForm() {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [countries,setCountries]=useState()
    const[cities,setCities]=useState([])
    const [city,setCity]=useState()
const postData = () => {
  axios.post(`https://63fde92f1626c165a0a30f33.mockapi.io/FakeData`, {
      firstName,
      lastName,
      countries,
      cities,
      city
  })
}
const country=[
  {
      name:"INDIA",
      states:[
          {
              name:"Telangana"
          },
          {
              name:"Andhra Pradesh"
          },
          {
              name:"Kerla"
          },
          {
              name:"Karnataka	"
          },
          {
              name:"Goa"
          },

      ]
  },
  {
      name:"USA",
      states:[
          {
              name:"florida"
          },
          {
              name:"Taxes"
          },
          {
              name:"California"
          },
          {
              name:"Massachusetts"
          },
          {
              name:"New York"
          },
      ]
  }
]
   function selectHandler(event){
  setCountries(event.target.value)
  setCities(country.find(ctr => ctr.name === event.target.value).states);
}
function cityHandler(event){
  setCity(event.target.value)
}
  return(
  <center className='center1'>
    <form className='Create-Form1'>
      <h1>Registration Form</h1>
    <div>
      <label className='label1'>First Name</label>
      <input className='input1' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
    </div>
    <div>
      <label className='label1'>Last Name</label>
      <input  className='input1' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
    </div>
    <div>
        <label className='label1'>Country</label> 
        <select onChange={selectHandler} className="drop1">
            <option>--country------</option>
            {country.map(e=>(
                <option value={e.name}>{e.name}</option>    
            ))}
        </select>  <br/>
        <label className='label1'>State</label> 
        <select onChange={cityHandler} className="drop1">
            <option>----States-----</option>
            {cities.map(c=>(
                <option value={c.name}>{c.name}</option>
            ))}
        </select>
    </div>

    <Link to='/read'>
    <button className='btn1' type='submit'onClick={postData} >Submit</button>
    </Link>
 
  </form>
  </center>
)}

