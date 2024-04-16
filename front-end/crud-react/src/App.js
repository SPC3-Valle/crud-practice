import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import FunctionHome from './Components/PracticeHome'

const PracticeHome = () => (
  <h1>This is a Practice.</h1>
)

function App() {
  return (
    <Routes>
      <Route path='/' element={<FunctionHome/>}/>
      <Route path='/host' element={<PracticeHome />}/>
    </Routes>
  );
}

export default App;
