// @ts-nocheck
import './App.css'
// import './media.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import Components from './Components'
import Signin from './signin'
import Home from './home'
import Event from './event'
import Welcome from './welcome'
// import Reauth from './auth'
// import UsedContext from './auth/usercontext'

function App() {

  return (
    <div>
      {/* <UsedContext> */}
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="/sign" element={<Event />}/>
              <Route path="/advertinfo" element={<Event />}/>
              <Route path="/advertinfo" element={<Event />}/>
              <Route path="/home" element={<Event />}/>
              <Route path="/preview" element={<Event />}/>
              <Route path="/movieplaying" element={<Event />}/>
              <Route path="/request" element={<Event />}/>
              <Route path="/submit" element={<Event />}/>
              <Route path="/library" element={<Event />}/>
              <Route path="/settings" element={<Event />}/>
              <Route path="/notification" element={<Event />}/>
              <Route path="/" element={<Signin />}/>
              {/* <Route path="/signup" element={<Signup />}/> */}
              {/* <Route path="/dashboard" element={<Wrapper><Dashboard /></Wrapper>}/>
              <Route path="/team" element={<Wrapper><Departmental /></Wrapper>}/>
              <Route path="/roles" element={<Wrapper><Roles /></Wrapper>}/>
              <Route path="/create" element={<Wrapper><Create /></Wrapper>}/>
              <Route path="/fileindex" element={<Wrapper><FileIndex /></Wrapper>}/>
              <Route path="/incoming" element={<Wrapper><Incoming /></Wrapper>}/>
              <Route path="/outgoing" element={<Wrapper><Outgoing /></Wrapper>}/>
              <Route path="/movement" element={<Wrapper><Movement /></Wrapper>}/>
              <Route path="/wrap" element={<Wrapper />}/> */}
              {/* <Route path="/about" element={<About />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/team" element={<Team />}/>
              <Route path="/location" element={<Location />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/home" element={<Reauth><Documents /></Reauth>}/>
              <Route path="/admin" element={<Reauth><AdminHome /></Reauth>}/>
              <Route path="/website" element={<Reauth><Website /></Reauth>}/>
              <Route path="/upload/:id" element={<Reauth><UploadDocs /></Reauth>}/>
              <Route path="/create" element={<Reauth><Create /></Reauth>}/> */}
          </Routes>
        </BrowserRouter>
      {/* </UsedContext> */}
    </div>
  )
}

export default App
