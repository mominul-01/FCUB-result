import React, { useState } from "react";
import Program from "../Program";
import Semester from "../Semester";
import data from "../../../public/subject.json";

function SubjectList() {
  // State
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [allSubject, setAllSubject] = useState([]);

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", department, semester);
    if (department && semester) {
      setAllSubject(data.departments[department].semesters[semester]);
      console.log(data.departments[department].semesters[semester][1].credit);
    }
  };

  return (
    <div>
      <div className="m-10 p-10 flex bg-gray-300 rounded-lg">
        <form className="flex" onSubmit={handleSubmit}>
          <Program onDepartmentData={(dep) => setDepartment(dep)} />

          <Semester onSemesterData={(sem) => setSemester(sem)} />

          <button
            className="bg-green-400 text-white py-3 px-6 inline-block"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        {allSubject.length > 0 ? (
          <div>
            <ul>
              {allSubject.map((subject) => (
                <li key={subject.subject_code}>
                  {subject.subject} - {subject.credit} credits
                </li>
              ))}
            </ul>

            <p>Total Creadit:</p>
          </div>
        ) : (
          <p>No subjects available for the selected department and semester.</p>
        )}
      </div>
    </div>
  );
}

export default SubjectList;
