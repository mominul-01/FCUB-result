import React, { useState } from "react";
import data from "../../public/subject.json"; // Assuming you have the JSON data in a file called data.json

const Subject = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const getFilteredSubjects = () => {
    if (selectedDepartment && selectedSemester) {
      return data.departments[selectedDepartment].semesters[selectedSemester];
    }
    return [];
  };


  const subjects = getFilteredSubjects();

  return (
    <div>
      <h2>Select Department:</h2>
      <select value={selectedDepartment} onChange={handleDepartmentChange}>
        <option value="">Select Department</option>
        {Object.keys(data.departments).map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>

      <h2>Select Semester:</h2>
      <select value={selectedSemester} onChange={handleSemesterChange}>
        <option value="">Select Semester</option>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
          <option key={semester} value={semester}>
            Semester {semester}
          </option>
        ))}
      </select>

      <h2>Subjects:</h2>
      {subjects.length > 0 ? (
        <ul>
          {subjects.map((subject) => (
            <li key={subject.subject_code}>
              {subject.subject} - {subject.credit} credits
            </li>
          ))}
        </ul>
      ) : (
        <p>No subjects available for the selected department and semester.</p>
      )}
    </div>
  );
};

export default Subject;
