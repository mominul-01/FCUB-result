import React, { useState } from 'react';
import data from '../../public/subject.json' 

const Program = () => {
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleChange = (e) => {
    const selectedProgramValue = e.target.value;
    setSelectedProgram(selectedProgramValue);
    console.log(`Selected Program: ${selectedProgramValue}`);
  };

  console.log(data);


  return (
    <div className=' p-5 '>
      <label htmlFor="program-dropdown" className='text-2xl  p-3'>Program Name:</label>
          <select id="program-dropdown" value={selectedProgram} onChange={handleChange}
            className=' text-lg rounded-lg px-5  mx-3 py-3'
          >
        <option value="">Select Program</option>
        <option value="BBA">BBA</option>
        {
          data.departments.map((item,i) => (
            <option key={i} value="BBA">{ item}</option>

          ))
        }
        <option value="LLB">LLB</option>
        <option value="Sociology">Sociology</option>
        <option value="English">English</option>
        <option value="CSE">CSE</option>
        <option value="Agriculture">Agriculture</option>
        <option value="EEE">EEE</option>
        <option value="BPH">BPH</option>
      </select>
    </div>
  );
};

export default Program;
