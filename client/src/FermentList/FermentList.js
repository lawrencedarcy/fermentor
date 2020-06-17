import React from 'react';
import './FermentList.css';
import FermentCard from '../FermentCard/FermentCard';

function FermentList(props) {
  return (
    <div className='ferment-list'>
      <div className='list-title'><div className='list-btn selected'>Current ferments</div><div className='list-btn'>Complete ferments</div></div>
    
      <FermentCard title='Sauerkraut' date='17 June 2020'/>
      <FermentCard title='Kimchi' date='15 June 2020'/>

      <div className='add-new-btn'>Add new ferment</div>
    </div>
  );
}

export default FermentList;