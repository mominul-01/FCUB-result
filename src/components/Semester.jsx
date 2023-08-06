import React, { useState } from "react";

const Semester = ({ onSemesterData }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const selectSemester = e.target.value;
    setSelectedOption(selectSemester);
    onSemesterData(e.target.value);
    // console.log(" Semester:  ", selectSemester);
  };

  return (
    <div className=" p-5 ">
      <label htmlFor="semester-dropdown" className="text-2xl  p-3">
        Semester:
      </label>
      <select
        id="semester-dropdown"
        value={selectedOption}
        onChange={handleChange}
        className=" text-lg rounded-lg px-5  mx-3 py-3"
      >
        <option value="">Select Semester</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
  );
};

export default Semester;
