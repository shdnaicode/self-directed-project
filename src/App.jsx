import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Course from './pages/Course'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Course />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;