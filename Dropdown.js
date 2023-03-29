import React, { useState } from 'react'

 function Dropdown() {
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
    const [countries,setCountries]=useState()
    const[cities,setCities]=useState([])
    const [city,setCity]=useState()
    function selectHandler(event){
        setCountries(event.target.value)
        setCities(country.find(ctr => ctr.name === event.target.value).states);
    }
    function cityHandler(event){
        setCity(event.target.value)
    }
  return (
    <div>
        <label>Country</label> <br/>
        <select onChange={selectHandler} className="drop">
            <option>--country------</option>
            {country.map(e=>(
                <option value={e.name}>{e.name}</option>    
            ))}
        </select>  <br/>
        <label>State</label> <br/>
        <select onChange={cityHandler}>
            <option>----States-----</option>
            {cities.map(c=>(
                <option value={c.name}>{c.name}</option>
            ))}
        </select>
    </div>
  )
}
export default Dropdown