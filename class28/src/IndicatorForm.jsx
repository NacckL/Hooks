import { useState } from "react";
import "./IndicatorForm.css"; // Mantive o nome do CSS para simplicidade

export default function StudentForm() {
  const [form, setForm] = useState({
    username: "JohnDoe",
    id: "12345",
    grade1: 7.5,
    grade2: 8.0,
    targetGrade: 8.0,
    semester: "2",
    major: "COMPUTER_SCIENCE",
    status: true,
    frequency: "MONTHLY",
    subjects: ["BACKEND", "PROJECT"],
  });

  // Opções baseadas na imagem
  const semesters = ["1", "2"];
  const majors = [
    { label: "Software Engineering", value: "SOFTWARE_ENGINEERING" },
    { label: "Computer Science", value: "COMPUTER_SCIENCE" },
    { label: "DevOps", value: "DEVOPS" },
  ];
  const frequencies = ["MONTHLY", "ANNUALLY", "WEEKLY"];
  const subjects = [
    { label: "Database", value: "DATABASE" },
    { label: "Backend", value: "BACKEND" },
    { label: "Frontend", value: "FRONTEND" },
    { label: "Project", value: "PROJECT" },
  ];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Lógica para adicionar/remover de um array de strings
      setForm((prevForm) => {
        const currentSubjects = prevForm.subjects || [];
        if (checked) {
          return { ...prevForm, subjects: [...currentSubjects, name] };
        } else {
          return { ...prevForm, subjects: currentSubjects.filter((s) => s !== name) };
        }
      });
    } else if (type === "radio" && name === "status") {
        setForm((f) => ({ ...f, status: value === 'true' }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting Student Data:", form);
    alert("Saved! (Check the console for the payload)");
  }

  return (
    <div className="indicator-page">
      <form className="indicator-card" onSubmit={handleSubmit}>
        <h1 className="indicator-title">Students Form</h1>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="Student's username"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="id">ID</label>
            <input
              id="id"
              name="id"
              type="text"
              value={form.id}
              onChange={handleChange}
              placeholder="Student ID"
              required
            />
          </div>
        </div>

        <h2 className="section-title">Grades</h2>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="grade1">Grade 1</label>
            <input
              id="grade1"
              name="grade1"
              type="number"
              step="0.5"
              value={form.grade1}
              onChange={handleChange}
              placeholder="e.g., 7.5"
            />
          </div>
          <div className="form-field">
            <label htmlFor="grade2">Grade 2</label>
            <input
              id="grade2"
              name="grade2"
              type="number"
              step="0.5"
              value={form.grade2}
              onChange={handleChange}
              placeholder="e.g., 8.0"
            />
          </div>
        </div>

        <h2 className="section-title">Situation</h2>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="targetGrade">Target Grade</label>
            <input
              id="targetGrade"
              name="targetGrade"
              type="number"
              step="0.1"
              value={form.targetGrade}
              onChange={handleChange}
              placeholder="e.g., 8.0"
            />
          </div>
          <div className="form-field">
            <label htmlFor="semester">Semester</label>
            <select
              id="semester"
              name="semester"
              value={form.semester}
              onChange={handleChange}
            >
              {semesters.map((s) => (
                <option key={s} value={s}>
                  {s}º
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="major">Major</label>
            <select
              id="major"
              name="major"
              value={form.major}
              onChange={handleChange}
            >
              {majors.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
             <label>Status</label>
             <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', height: '100%' }}>
                <label>
                    <input type="radio" name="status" value="true" checked={form.status === true} onChange={handleChange} /> Active
                </label>
                <label>
                    <input type="radio" name="status" value="false" checked={form.status === false} onChange={handleChange} /> Inactive
                </label>
             </div>
          </div>
        </div>

        <h2 className="section-title">Subjects & Frequency</h2>
        <div className="form-grid">
          <div className="form-field">
            <label>Subjects</label>
            <div role="group" aria-label="Subjects" style={{ paddingTop: '8px' }}>
              {subjects.map((s) => (
                <label key={s.value} style={{ display: 'block', fontWeight: 'normal' }}>
                  <input
                    type="checkbox"
                    name={s.value}
                    checked={form.subjects.includes(s.value)}
                    onChange={handleChange}
                  />
                  {s.label}
                </label>
              ))}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
            >
              {frequencies.map((f) => (
                <option key={f} value={f}>
                  {f.charAt(0).toUpperCase() + f.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
