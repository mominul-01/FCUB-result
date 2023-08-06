import React, { useState } from "react";
import data from "../../public/subject.json";

const Program = ({ onDepartmentData }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleChange = (e) => {
    const selectedDepartmentValue = e.target.value;
    setSelectedDepartment(selectedDepartmentValue);
    onDepartmentData(e.target.value);

    // console.log(`Selected Department: ${selectedDepartmentValue}`);
  };

  return (
    <div className=" p-5 ">
      <label htmlFor="department-dropdown" className="text-2xl  p-3">
        Department Name:
      </label>
      <select
        id="department-dropdown"
        value={selectedDepartment}
        onChange={handleChange}
        className=" text-lg rounded-lg px-5  mx-3 py-3"
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
