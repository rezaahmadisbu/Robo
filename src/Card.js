import React from 'react';

const Card = ({ id, name, email, highlightText, searchfield }) => {
  return (
    <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{highlightText(name, searchfield)}</h2>
        <p>{highlightText(email, searchfield)}</p>
      </div>
    </div>
  );
}

export default Card;
