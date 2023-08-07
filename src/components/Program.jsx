import React, { useState } from "react";
import data from "../../public/subject.json";

const Program = ({ onDepartmentData }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleChange = (e) => {
    const selectedDepartmentValue = e.target.value;
    setSelectedDepartment(selectedDepartmentValue);
    onDepartmentData(e.target.value);
  };

  return (
    <div className="m-4 flex-1">
      <label
        htmlFor="department-dropdown"
        className="block text-white text-lg font-bold mb-2"
      >
        Department Name:
      </label>
      <select
        id="department-dropdown"
        value={selectedDepartment}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select Department</option>
        {Object.keys(data.departments).map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>

      {data.map}
    </div>

 
  );
};

export default Program;
