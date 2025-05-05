// @ts-nocheck
import './App.css'
// import './media.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import Components from './Components'
import Signin from './signin'
import Home from './home'
import Event from './event'
import Welcome from './welcome'
import Login from './login'
import Newjob from './newjob'
import Newjob2 from './newjob2'
import Descjob from './descjob'
import Descjob2 from './jobdesc2'

// import Reauth from './auth'
// import UsedContext from './auth/usercontext'

function App() {

  return (
    <div>
      {/* <UsedContext> */}
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/welcome" element={<Home/>}/>
              <Route path="/new" element={<Newjob/>}/>
              <Route path="/new2" element={<Newjob2/>}/>
              <Route path="/job2" element={<Descjob/>}/>
              <Route path="/job3" element={<Descjob2/>}/>
          </Routes>
        </BrowserRouter>
      {/* </UsedContext> */}
    </div>
  )
}

export default App
