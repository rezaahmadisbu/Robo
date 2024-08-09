import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2 search-box'>
      <input 
        className='pa3 ba b--green bg-lightest-blue search-input'
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
