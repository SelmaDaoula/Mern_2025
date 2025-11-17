import { useState } from "react";

export default function StudentForm({ students, setStudents }) {
  const [name, setName] = useState("");

  const addStudent = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    setStudents([...students, { id: Date.now(), name }]);
    setName("");
  };

  return (
    <form onSubmit={addStudent}>
      <input 
        type="text" 
        value={name} 
        placeholder="Nom étudiant"
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
