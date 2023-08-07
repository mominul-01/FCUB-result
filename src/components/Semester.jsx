import React, { useState } from "react";

const Semester = ({ onSemesterData }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const selectSemester = e.target.value;
    setSelectedOption(selectSemester);
    onSemesterData(e.target.value);
  };

  return (
    <div className="m-4 flex-1">
      <label
        htmlFor="semester-dropdown"
        className="block text-white text-lg font-bold mb-2"
      >
        Semester:
      </label>
      <select
        id="semester-dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
