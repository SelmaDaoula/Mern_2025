import StudentItem from "./StudentItem";

export default function StudentList({ students, setStudents }) {
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div>
      <h2>Liste des étudiants</h2>
      {students.length === 0 && <p>Aucun étudiant ajouté.</p>}
      
      {students.map((stu) => (
        <StudentItem 
          key={stu.id} 
          student={stu} 
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}
