import React, { useState } from 'react';

const BatchInput = () => {
  const [batch, setBatch] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setBatch(inputValue);
    console.log(`Batch: ${inputValue}`);
  };

  return (
    <div className=' p-5 '>
      <label htmlFor="batch-input" className='text-2xl  p-3'>Batch:</label>
          <input
               className=' text-lg rounded-lg px-5  mx-3 py-3'
        type="text"
        id="batch-input"
        value={batch}
        onChange={handleChange}
        placeholder="Enter batch here"
      />
    </div>
  );
};

export default BatchInput;
