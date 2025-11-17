import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { useState } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <StudentForm students={students} setStudents={setStudents} />
      <StudentList students={students} setStudents={setStudents} />
    </div>
  );
}
