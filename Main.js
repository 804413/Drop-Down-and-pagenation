import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FormExampleForm from './Create'
import React from 'react'
import Read from './Read'
import Update from './Update'

export default function Main() {
  return (
    <div>
         <BrowserRouter>
         <Routes>
          <Route exact path='/create'element={<FormExampleForm/>}/>
          <Route exact path='/read'element={<Read/>}/>
          <Route exact path='/update'element={<Update/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  )
}
