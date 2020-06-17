import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import FermentList from './FermentList/FermentList'

function App() {
  return (
    <div>
      <Navbar />
     <div className='app'>
     <FermentList />

   
     </div>
    </div>
  );
}

export default App;
