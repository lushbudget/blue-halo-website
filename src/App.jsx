
import './App.css'
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Eez from './pages/Eez';
import {Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/eez" element={<Eez />} />
      </Routes>
    </>



  )
}

export default App
