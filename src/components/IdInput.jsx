import React, { useState } from 'react';

const IdInput = () => {
  const [id, setId] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setId(inputValue);
    console.log(`Id: ${inputValue}`);
  };

  return (
    <div className=' p-5 '>
      <label htmlFor="id-input" className='text-2xl  p-3'>Id:</label>
          <input 
               className=' text-lg rounded-lg px-5  mx-3 py-3'
        type="text"
        id="id-input"
        value={id}
        onChange={handleChange}
        placeholder="Enter Id here"
      />
    </div>
  );
};

export default IdInput;
