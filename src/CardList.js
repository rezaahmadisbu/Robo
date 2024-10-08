import React from 'react';
import Card from './Card';

const CardList = ({ robots, highlightText, searchfield }) => {
  return (
    <div className='card-container'>
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}
              highlightText={highlightText}
              searchfield={searchfield}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
