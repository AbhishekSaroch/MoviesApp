import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Header from "./components/Header"
import Movies from './pages/Movies';
import Like from './pages/Like';
const App = () => {
  return (
    <div className='gap-y-5 flex flex-col bg-slate-300 min-h-screen overflow-hidden '>
      <div>
      <Header />
      </div >
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/like" element={<Like/>}/>
      </Routes>
    </div>
  )
}

export default App