import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Import Routes
import { Homepage } from './Components/Homepage/Homepage';
import { Challenge } from './Components/Challenge/Challenge';
import { LeaderBoard } from './Components/Homepage/leaderboard';
import { Loginpage } from './Components/Homepage/loginpage';
import { Userprofile } from './Components/Homepage/userprofilepage';
import { Lecturepage } from './Components/Homepage/lecturepage';
import { Learn } from './Components/Homepage/Learn';
import { Contact } from './Components/Homepage/Contact';
import Scarperr from './Components/Homepage/scarper'; // Correct import

function App() {
  return (
    <div className="App">
      <Routes> {/* Use Routes instead of Route */}
        <Route path='/' element={<Homepage />} /> {/* Correct the path */}
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/Challenge' element={<Challenge/>}/>
        <Route path='/LeaderBoard' element={<LeaderBoard/>}/>
        <Route path='/LoginPage' element={<Loginpage/>}/>
        <Route path='/Userprofile' element={<Userprofile/>}/>
        <Route path='/Lecturepage' element={<Lecturepage/>}/>
        <Route path='/Learn' element={<Learn/>}/>
        <Route path='/Contact' element={<Contact/>}/> 
        <Route path='/Scarperr' element={<Scarperr/>}/> {/* Correct the path */}
      </Routes>
    </div>
  );
}

export default App;
