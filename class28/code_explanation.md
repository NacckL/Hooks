`class28/simple_react_form/src/IndicatorForm.jsx`

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
    alert("Saved! (Check the console for the payload 👀)");
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

### handleSubmit function
```
function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitting Indicator:", form);
  alert("Saved! (Check the console for the payload)");
}
```


What it does:
- `e.preventDefault()` stops the browser from reloading the page when the form is submitted (the default HTML form behavior).  
- Then, it logs the entire form object (form) to the console, this is all the field data the user entered.  
- Finally, it shows an alert just to give quick feedback to the user (“Saved!”).  

👉 In a real app, instead of console.log or alert, you’d probably send the form data to a server or API with `fetch()` or `axios.post()`.
---

###  handleChange function
```
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
```

What it does:
- This function updates the state (form) every time a field changes.
- `e.target` is the HTML element that triggered the change (the input, select, etc.).
- It reads its name and value attributes to know what field changed and what the new value is.
- `setForm()` updates the state. The syntax `...f` copies the current state, and `[name]: value` updates only that one field dynamically.

It also handles special cases:
- If the input is a checkbox, it stores checked (true/false) instead of a text value. 
- If the field is a multiple select, it collects all selected options into an array.

👉 This approach makes the form dynamic, one function can handle all fields, no matter how many inputs exist.

### htmlFor property

Example:
```
<label htmlFor="name">Name</label>
<input id="name" name="name" ... />
```

- `htmlFor` in `JSX` is the same as for in plain HTML.
- It connects the label with the input that has the matching id.
- This makes the form more accessible: clicking the label focuses the input automatically. 
- React uses `htmlFor` instead of for because for is a reserved JavaScript keyword.

### 4️⃣ Why the values are `form.something`

Example:
```
<input
  id="name"
  name="name"
  value={form.name}
  onChange={handleChange}
/>
```

- form is the state object holding all field values.   
- form.name is the specific value for that input.  
- This pattern is called a controlled component, the React state is the single source of truth.

---

### What’s a sample content of just `e`?

When a user types or changes an input, React passes an event object, called `SyntheticEvent`.
It’s React’s version of the browser’s native event, but works almost the same.

For example, if a user types in a text field named "`name`", you could log:

```
function handleChange(e) {
  console.log(e);
}
```


You’ll see something like this in the console:
```
SyntheticEvent {
  type: "change",
  target: input#name,
  currentTarget: input#name,
  bubbles: true,
  cancelable: true,
  isTrusted: true,
  ...
}
```

So, `e` itself is an object full of information about the event:
- what kind of event it was (type: "change")
- what element triggered it (target)
- and methods like `preventDefault()`, `stopPropagation()`, etc.

---

### Is `selectedOptions` created by us or by React itself?

It’s not created by us, it comes automatically from the browser’s DOM API.

Whenever you have a `<select multiple>` element, the browser automatically gives that element a property called `selectedOptions`, which contains a list of the selected `<option>` items.

Example:
```
<select multiple id="themes">
  <option value="Leadership" selected>Leadership</option>
  <option value="Wellbeing" selected>Wellbeing</option>
  <option value="Performance">Performance</option>
</select>
```

If you log `e.target.selectedOptions`, you’ll get something like:
```
HTMLCollection [
  <option value="Leadership">Leadership</option>,
  <option value="Wellbeing">Wellbeing</option>
]
```

So `selectedOptions` is a built-in browser property, not from React.

---

### What does `Array.from()` do?
`Array.from()` is a JavaScript method that converts array-like objects into real arrays.

`selectedOptions` is not a true array, it’s an `HTMLCollection`, which looks like an array but doesn’t have methods like `.map()` or `.filter()`.

So this line:
```
const vals = Array.from(selectedOptions).map((o) => o.value);
```

does two things:
- `Array.from(selectedOptions)` turns the `HTMLCollection` into an actual array:

```
[<option value="Leadership">, <option value="Wellbeing">]
```


`.map((o) => o.value)` extracts only the value from each option:

["Leadership", "Wellbeing"]


Now you can safely store that array inside your React state.

---

### What’s a sample content of `e.target`?
`e.target` is the actual HTML element that triggered the event.
If you log it inside your handler, you’ll see the entire element.

Example 1 — Text input:
```
<input name="name" id="name" value="Alice" />
```

If the user types something, `e.target` looks like:
```
HTMLInputElement {
  type: "text",
  name: "name",
  id: "name",
  value: "Alice"
}
```


Example 2 — Checkbox:
```
<input type="checkbox" name="active" checked={true} />
```

Then `e.target` looks like:
```
HTMLInputElement {
  type: "checkbox",
  name: "active",
  checked: true
}
```


Example 3 — Multiple select:
```
<select name="themes" multiple>
  <option value="Leadership" selected>Leadership</option>
  <option value="Wellbeing" selected>Wellbeing</option>
</select>
```

Then `e.target` looks like:
```
HTMLSelectElement {
  type: "select-multiple",
  name: "themes",
  selectedOptions: HTMLCollection(2) [
    <option value="Leadership">Leadership</option>,
    <option value="Wellbeing">Wellbeing</option>
  ]
}
```
<img width="1383" height="653" alt="image" src="https://github.com/user-attachments/assets/22ab7eb1-9a14-4f24-a129-cf670cfb78ea" />

---



