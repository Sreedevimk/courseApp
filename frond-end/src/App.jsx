
import './App.css'


import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Course from './components/Course'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Course/>}></Route>
        </Routes>
    </>
  )
}
export default App
