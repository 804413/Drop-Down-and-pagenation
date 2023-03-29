import React from 'react'
import "../src/Pagesno.css"
export default function Pagesno({data,Pageclick}) {
  const  pagenum=[]
  for(let i=1 ; i<=Math.ceil (data.length/2); i++){
    pagenum.push(i)
  }
  console.log(pagenum)
  return (
    <div>
        <center>
          {pagenum.map((s)=> <button className='btn' onClick={()=>Pageclick(s)}>{s}</button>)}
        </center>
    </div>
  )
}
