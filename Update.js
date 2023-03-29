import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import "../src/Update.css"
function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countries,setCountries]=useState()
  const[cities,setCities]=useState([])
  const [city,setCity]=useState()
  const [id, setID] = useState(null);
  useEffect(() => {
          setID(localStorage.getItem('ID'))
          setFirstName(localStorage.getItem('First Name'));
          setLastName(localStorage.getItem('Last Name'));
          setCountries(localStorage.getItem('countries Value'))
          setCities(localStorage.getItem('cities Value'))
          setCity(localStorage.getItem('city Value'))
  }, []);
  const updateAPIData = () => {
    axios.put(`https://63fde92f1626c165a0a30f33.mockapi.io/FakeData/${id}`, {
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
  return (
    <div>
       <center className='main'>
        
    <form className="form">
    <h1 className='head'>Registration Form</h1>
    <div>
      <label className='formname1'>First Name</label>
      <input className='inputname' placeholder='First Name'value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
    </div>
    <div>
      <label className='formname1'>Last Name</label>
      <input className='inputname' placeholder='Last Name'value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    </div>
    <div>
        <label className='formname1'>Country</label> 
        <select onChange={selectHandler} className="dropdown">
            <option>--country------</option>
            {country.map(e=>(
                <option value={e.name}>{e.name}</option>    
            ))}
        </select>  <br/>
        <label className='formname1'>State</label> 
        <select onChange={cityHandler} className="dropdown">
            <option>----States-----</option>
            {Object.values(cities).map(c=>(
                <option value={c.name}>{c.name}</option>
            ))}
        </select>
    </div>
    <Link to='/read'>
    <button className="button" type='submit'  onClick={updateAPIData}>Update</button>
    </Link>
 
  </form>
  </center>
    </div>
  )
}

export default Update