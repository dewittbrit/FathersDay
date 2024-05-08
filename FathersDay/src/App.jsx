import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from '../components/SignUp'
import './App.css'
import Navigations from '../components/Navigations'
// import HomePage from '../components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Routes>
{/* <Route path="/" element={<HomePage/>}/> */}
  <Route path="/signup" element={<SignUp/>}/>
</Routes>
      <div>
      
      </div>
      <h1>Welcome to Chef Couch's Kitchen!</h1>
     
    </>
  )
}

export default App
