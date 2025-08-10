import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;