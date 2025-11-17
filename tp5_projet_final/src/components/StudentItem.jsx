export default function StudentItem({ student, deleteStudent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <p>{student.name}</p>
      <button onClick={() => deleteStudent(student.id)}>Supprimer</button>
    </div>
  );
}
