import React from 'react';
import './FermentCard.css';

function FermentCard({title, date}) {
  return (
    <div className='ferment-card'>
      <div className='ferment-title'>{title}</div>

      <div className='ferment-date'>
  <b>Start date: </b>{date}
      </div>
      <div className='ferment-date'>
        <b>Ready in 7 days</b>
      </div>
    </div>
  );
}

export default FermentCard;
