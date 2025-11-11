1. Create the project  
`npm create vite@latest simple_index_page`

---

2. Create the `pages` folder  
 `mkdir src/page`

---

4. Create the index file  
`touch src/pages/IndicatorsIndexPage.jsx`

---

5. Open the index file  
`code src/pages/IndicatorsIndexPage.jsx`

---

6. Add the following content to the index file  
```
import React from "react";
import "./indicators-index.css";

const data = [
  {
    name: "Employee Trust Index",
    dimension: "Credibility",
    description:
      "Measures trust in leadership, transparency, and reliability across the organization.",
  },
  {
    name: "Fairness Perception",
    dimension: "Fairness",
    description:
      "Assesses perceived equity in opportunities, rewards, and decision-making processes.",
  },
  {
    name: "Respect Factor",
    dimension: "Respect",
    description:
      "Evaluates the day-to-day respect shown among peers and by leadership.",
  },
  {
    name: "Pride Metric",
    dimension: "Pride",
    description:
      "Captures how proud employees feel about their work and the organization.",
  },
  {
    name: "Camaraderie Index",
    dimension: "Camaraderie",
    description:
      "Looks at social bonds, teamwork quality, and sense of belonging.",
  },
];

export default function IndicatorsIndexPage() {
  return (
    <div className="indicators-page">
      <div className="card">
        <h1 className="title">Indicators</h1>

        <button className="new-button" type="button">
          New Indicator
        </button>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Dimension</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td>
                    <div className="name-cell">
                      <span className="name">{row.name}</span>
                    </div>
                  </td>
                  <td className="muted">{row.dimension}</td>
                  <td className="desc">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```

---

6. Create css file  
`src/pages/indicators-index.css`

---

8. Open the css file  
`code src/pages/indicators-index.css`

---

10. Add the following code to the css file
``` 
:root {
  --bg: #e6f2e6;          /* soft green background */
  --card: #ffffff;        /* card surface */
  --ink: #1f2937;         /* heading/text */
  --muted: #475569;       /* secondary text */
  --ring: #84cc16;        /* button/check green */
  --ring-strong: #16a34a; /* darker green for hover */
  --border: #e5e7eb;      /* table borders */
  --shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
  --radius: 18px;
}

* { box-sizing: border-box; }

.indicators-page {
  min-height: 100vh;
  background: var(--bg);
  padding: 48px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.card {
  width: min(980px, 100%);
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 36px 38px 32px;
}

.title {
  margin: 0 0 18px;
  font-size: 44px;
  line-height: 1.1;
  color: var(--ink);
  font-weight: 800;
}

.new-button {
  appearance: none;
  border: none;
  background: var(--ring);
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  padding: 14px 22px;
  border-radius: 12px;
  cursor: default; /* no interaction yet */
  margin: 6px 0 22px;
  box-shadow: 0 2px 0 rgba(0,0,0,0.04) inset;
}

.new-button:hover {
  background: var(--ring-strong);
}

.table-wrap {
  overflow: auto;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.table thead th {
  text-align: left;
  font-weight: 700;
  color: var(--muted);
  padding: 16px 20px;
  font-size: 15px;
  border-bottom: 1px solid var(--border);
  background: #fafafa;
}

.table tbody td {
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
  font-size: 16px;
  color: var(--ink);
}

.table tbody tr:last-child td {
  border-bottom: none;
}

.name-cell .name {
  display: block;
  font-weight: 600;
}

.muted {
  color: var(--ink);
  opacity: 0.9;
  white-space: nowrap;
}

.desc {
  color: var(--muted);
  line-height: 1.5;
}
```
---

9. Open the App.jsx file  
`code src/App.jsx`

---

11. Replace the current code with the following:  
```
import React from "react";
import IndicatorsIndexPage from "./pages/IndicatorsIndexPage.jsx";

export default function App() {
  return (
    <div>
      <IndicatorsIndexPage />
    </div>
  );
}

```

---

11-Replace the content of `src/index.css` with the following:  
```
body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
}

```
