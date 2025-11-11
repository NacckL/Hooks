1. run the following
```
npm create vite@latest simple_react_form
```

2. Choose "React"
<img width="891" height="473" alt="image" src="https://github.com/user-attachments/assets/9926736e-f775-4f90-bd4c-03d1bb7a6536" />

3. Choose "Javascript"
<img width="1047" height="485" alt="image" src="https://github.com/user-attachments/assets/694520bb-11cf-43b5-bb2a-598d0ffe92b7" />

4. No for "rolldown-vite Experimental")
<img width="939" height="259" alt="image" src="https://github.com/user-attachments/assets/1cd1ebbb-6a40-439a-9c44-25d57246323c" />

5. Yes for "Install with npm and start now"
<img width="939" height="259" alt="image" src="https://github.com/user-attachments/assets/b2498e00-4526-422c-b0ed-c75c05cd64c3" />

---
6. Get in your project folder

7. Create a file called `IndicatorForm.jsx`
```
touch src/IndicatorForm.jsx
```
Use this content
```
import { useState } from "react";
import "./IndicatorForm.css";

export default function IndicatorForm() {
  const [form, setForm] = useState({
    name: "Employee Trust Index",
    code: "ETI_001",
    weight: "0.5",
    calculationMethod: "Mean",
    formula: "",
    target: "4.5",
    threshold: "3.8",
    frequency: "Annually",
    ownerArea: "Human Resources",
    themes: ["Leadership"],
    active: true,
  });

  const calculationMethods = ["Mean", "Median", "Sum", "Weighted Mean"];
  const frequencies = ["Monthly", "Quarterly", "Semiannually", "Annually"];
  const areas = ["Human Resources", "Operations", "Finance", "IT", "Marketing"];
  const themes = ["Leadership", "Engagement", "Wellbeing", "Performance"];

  function handleChange(e) {
    const { name, value, type, checked, selectedOptions } = e.target;

    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else if (type === "select-multiple") {
      const vals = Array.from(selectedOptions).map((o) => o.value);
      setForm((f) => ({ ...f, [name]: vals }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting Indicator:", form);
    alert("Saved! (Check the console for the payload)");
  }

  return (
    <div className="indicator-page">
      <form className="indicator-card" onSubmit={handleSubmit}>
        <h1 className="indicator-title">Indicator Form</h1>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Indicator name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="code">Code</label>
            <input
              id="code"
              name="code"
              type="text"
              value={form.code}
              onChange={handleChange}
              placeholder="e.g., ETI_001"
              required
            />
          </div>
        </div>

        <h2 className="section-title">Calculation &amp; Scoring</h2>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="weight">Weight</label>
            <input
              id="weight"
              name="weight"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={form.weight}
              onChange={handleChange}
              placeholder="0.5"
            />
          </div>

          <div className="form-field">
            <label htmlFor="calculationMethod">Calculation Method</label>
            <select
              id="calculationMethod"
              name="calculationMethod"
              value={form.calculationMethod}
              onChange={handleChange}
            >
              {calculationMethods.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="formula">Formula</label>
          <textarea
            id="formula"
            name="formula"
            rows={3}
            value={form.formula}
            onChange={handleChange}
            placeholder="Optional formula or expression"
          />
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="target">Target</label>
            <input
              id="target"
              name="target"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={form.target}
              onChange={handleChange}
              placeholder="4.5"
            />
          </div>

          <div className="form-field">
            <label htmlFor="threshold">Threshold</label>
            <input
              id="threshold"
              name="threshold"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={form.threshold}
              onChange={handleChange}
              placeholder="3.8"
            />
          </div>
        </div>

        <div className="form-grid">
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
                  {f}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="ownerArea">Owner Area</label>
            <select
              id="ownerArea"
              name="ownerArea"
              value={form.ownerArea}
              onChange={handleChange}
            >
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="themes">Theme(s)</label>
            <select
              id="themes"
              name="themes"
              multiple
              value={form.themes}
              onChange={handleChange}
              aria-describedby="themesHelp"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <small id="themesHelp" className="help-text">
              Hold Ctrl/Cmd to select multiple.
            </small>
          </div>

          <div className="form-field switch-field">
            <label htmlFor="active">Active</label>
            <label className="switch">
              <input
                id="active"
                name="active"
                type="checkbox"
                checked={form.active}
                onChange={handleChange}
              />
              <span className="slider" />
            </label>
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

```

---

8-Create a file called `src/IndicatorForm.css`
```
touch src/IndicatorForm.css
```

9-Use this content  
```
:root{
  --bg: #d6ebd6;          /* light green background */
  --card: #ffffff;        /* card surface */
  --text: #0f172a;        /* slate-900 */
  --muted: #334155;       /* slate-700 */
  --border: #e5e7eb;      /* gray-200 */
  --ring: #86efac;        /* green-300 */
  --primary: #5fa86f;     /* button base */
  --primary-hover: #4b8d5a;
  --shadow: 0 10px 30px rgba(0,0,0,.08);
  --radius: 16px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: var(--text);
  background: var(--bg);
}

.indicator-page {
  height: 100vh;                /* full viewport height */
  width: 100%;                  /* full width */
  display: flex;                /* use flexbox */
  justify-content: center;      /* horizontal center */
  align-items: center;          /* vertical center */
  background: var(--bg);        /* keep your soft green background */
  padding: 16px;                /* some spacing */
}


.indicator-card {
  width: min(880px, 100%);
  background: var(--card);
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 28px;
}

.indicator-title {
  margin: 0 0 20px;
  font-size: 28px;
  line-height: 1.2;
}

.section-title {
  margin: 20px 0 8px;
  font-size: 16px;
  color: var(--muted);
  font-weight: 700;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

@media (min-width: 720px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field label {
  font-size: 14px;
  color: var(--muted);
}

.form-field input[type="text"],
.form-field input[type="number"],
.form-field textarea,
.form-field select {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 15px;
  background: #fbfbfb;
  outline: none;
  transition: box-shadow .15s ease, border-color .15s ease, background .15s ease;
}

.form-field textarea { resize: vertical; }

.form-field input:focus,
.form-field textarea:focus,
.form-field select:focus {
  border-color: var(--ring);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ring) 40%, transparent);
  background: #fff;
}

.help-text {
  color: #64748b; /* slate-500 */
  font-size: 12px;
}

/* Toggle switch */
.switch-field {
  align-items: flex-start;
}

.switch {
  position: relative;
  width: 56px;
  height: 32px;
  display: inline-block;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #e5e7eb;
  border-radius: 999px;
  transition: background-color .2s ease;
  box-shadow: inset 0 0 0 1px #cbd5e1;
}

.slider::before {
  content: "";
  position: absolute;
  height: 24px;
  width: 24px;
  left: 4px;
  top: 4px;
  background-color: white;
  border-radius: 50%;
  transition: transform .2s ease;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
}

.switch input:checked + .slider {
  background-color: #86efac;
}

.switch input:checked + .slider::before {
  transform: translateX(24px);
}

/* Actions */
.actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

button.primary {
  appearance: none;
  border: none;
  border-radius: 12px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  background: var(--primary);
  color: white;
  cursor: pointer;
  transition: background .15s ease, transform .02s ease;
  box-shadow: 0 6px 20px rgba(95,168,111,.35);
}

button.primary:hover { background: var(--primary-hover); }
button.primary:active { transform: translateY(1px); }

```
---
10-`src/index.css`
```
body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
}
```

11-`src/App.jsx`
```
// src/App.jsx
import IndicatorForm from "./IndicatorForm";

export default function App() {
  return <IndicatorForm />;
}

```

---

12-Execute it and be happy
