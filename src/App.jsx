
import './App.css'
import Welcome from './pages/Welcome';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    
    </>
  
   
  
  )
}

export default App
