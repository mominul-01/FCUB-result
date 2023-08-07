import React, { useEffect, useState } from "react";
import Program from "../Program";
import Semester from "../Semester";
import data from "../../../public/subject.json";

function SubjectList() {
  // State
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [allSubject, setAllSubject] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (department && semester) {
      setAllSubject(data.departments[department].semesters[semester]);
    }
  };

  // use for total credit
  useEffect(() => {
    setTotalCredit(
      allSubject.reduce((total, course) => total + course.credits, 0)
    );
  }, [allSubject]);

  return (
    <div>
      <form
        className="flex justify-between bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <Program onDepartmentData={(dep) => setDepartment(dep)} />

        <Semester onSemesterData={(sem) => setSemester(sem)} />

        <div className="flex items-center pt-8 justify-center flex-1 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-all"
            type="submit"
          >
            Show All Subject
          </button>
        </div>
      </form>

      <div>
        {allSubject.length > 0 ? (
          <div className=" p-4 w-3/5">
            <h4 className="text-2xl font-bold pb-6">Subject Details</h4>
            <div className="grid grid-cols-4 gap-4 mb-2 pb-2 border-b-2">
              <div className=" font-semibold"> Code</div>
              <div className=" col-span-2 font-semibold"> Name</div>
              <div className=" font-semibold text-right"> Credit</div>
            </div>
            <div>
              {allSubject.map((subject) => (
                <div
                  key={subject.course_code}
                  className="grid grid-cols-4  last:mb-2 last:pb-2 last:border-b-2 "
                >
                  <div className="">{subject.course_code}</div>
                  <div className=" col-span-2">{subject.course_name}</div>
                  <div className=" text-right">{subject.credits}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className=" font-semibold ">Total Credit:</div>
              <div className=" font-semibold text-right">{totalCredit}</div>
            </div>
          </div>
        ) : (
          <p>No subjects available for the selected department and semester.</p>
        )}
      </div>
    </div>
  );
}

export default SubjectList;
