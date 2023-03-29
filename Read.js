import React, { useEffect, useState } from 'react';
import "../src/Read.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import Pagesno from './Pagesno';


export default function Read() {
    const [perPage,setPerpage]=useState([])
    const[APIData,setAPIData] = useState([])
    
    const getData = () => {
        axios.get(`https://63fde92f1626c165a0a30f33.mockapi.io/FakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    useEffect(() => {
        axios.get(`https://63fde92f1626c165a0a30f33.mockapi.io/FakeData`)
            .then((response) => {
                setAPIData(response.data);  
                
            })
    }, [])
    useEffect(() => {
        axios.get(`https://63fde92f1626c165a0a30f33.mockapi.io/FakeData`)
            .then((response) => {
                setPerpage(response.data.slice(0,2));  
            })
    }, [])
    console.log(perPage)
    const onDelete = (id) => {
        axios.delete(`https://63fde92f1626c165a0a30f33.mockapi.io/FakeData/${id}`)
        .then(() => {
            getData();
        })
      }
    const setData = (data) => {
        let { id, firstName, lastName,countries,cities,city } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('countries Value', countries)
        localStorage.setItem('cities Value', cities)
        localStorage.setItem('city Value', city)
     }
    
  const clickfunc=(e)=>{setPerpage(APIData.slice(e*2-2,e*2))}
    
  const [search,setSearch]=useState('')
  const searchHAndler=(e)=>{
        setSearch(e.target.value)
     }
  return (
    <React.Fragment>
        <div>
            <label>Serach Data</label>
            <input type="text" placeholder='Search Data' onChange={searchHAndler} />
            {APIData.filter(x=> x.firstName.includes(search))
            .map((s)=><li>{s.firstName}</li>)}

        </div>
    <div>
        <table class="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Update</th>
                        <th>Delete</th>
        
                    </tr>
                </thead>

                <tbody>
                    {APIData.map((data) => {
     return (
       <tr>
          <th>{data.firstName}</th>
           <th>{data.lastName}</th>
           <th>{data.countries}</th>
           <th>{data.city}</th>
           <Link to='/update'>
  <td> 
     <button className='button1'onClick={() => setData(data)}>Update</button>
   </td>
</Link>
<td>
   <button className='button2' onClick={() => onDelete(data.id)}>Delete</button>
</td>
        </tr>
        
   )})}                
                </tbody>
            </table>
            <Link to='/create'><button className='button3'>Create</button></Link>   
    </div>
  
<div>
    {perPage.map((s)=>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-2'>

            </div>
            <div className='col-10'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='card'>  
                        <h1>Table Data</h1>
                            <li>FirstName--  {s.firstName}</li>
                            <li>SecondName-- {s.lastName}</li>
                            <li>Country-- {s.countries}</li>
                            <li>City-- {s.city}</li>     
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-2'>

            </div>
        </div>
    </div>
    // <div className='card'>
    //     <div></div>
    //   <li>{s.firstName}</li>
    //   <li>{s.lastName}</li>
    //   <li>{s.countries}</li>
    //   <li>{s.city}</li>     
    // </div>
    )}
   
</div>
 <Pagesno data={APIData} Pageclick={clickfunc}/>

</React.Fragment>)}