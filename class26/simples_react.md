1. Create app with vite 
```
npm create vite@latest simple_react_users_filter
```

2. Change the following files  

#### `src/App.jsx` 

```
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Erro ao carregar usuários:", err));
  }, [1]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Lista de Usuários</h1>
        <input
          className="search"
          type="text"
          placeholder="Filtrar por nome ou email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <ul className="list">
        {filtered.map((u) => (
          <li className="card" key={u.id}>
            <div className="title">{u.name}</div>
            <div className="muted">{u.email}</div>
            <a
              className="link"
              href={`http://${u.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {u.website}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

#### `src/App.css`
```
/* Simple, clean, and readable. No frameworks required. */
:root {
  --bg: #0b0f14;
  --panel: #121822;
  --text: #e8eef6;
  --muted: #9db0c9;
  --accent: #4da3ff;
  --accent-2: #71c7ec;
  --ring: rgba(113, 199, 236, 0.35);
  --border: #223048;
}

* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }

.app { max-width: 880px; margin: 40px auto; padding: 0 16px; }

.header { display: flex; gap: 16px; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.header h1 { margin: 0; font-size: 28px; letter-spacing: 0.2px; }

.search {
  width: 320px;
  max-width: 60%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  outline: none;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.search:focus { border-color: var(--accent-2); box-shadow: 0 0 0 4px var(--ring); }

.info, .error, .meta { margin: 8px 0 16px; }
.error { color: #ff8d8d; }
.meta { color: var(--muted); }

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
  padding: 0;
  list-style: none;
}

.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s;
}
.card:hover { transform: translateY(-2px); border-color: var(--accent-2); box-shadow: 0 8px 30px rgba(0,0,0,0.25); }

.title { font-weight: 600; }
.muted { color: var(--muted); font-size: 0.95rem; }

.link {
  width: fit-content;
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px dashed rgba(77, 163, 255, 0.4);
}
.link:hover { color: var(--accent-2); border-bottom-color: rgba(113,199,236,0.6); }

```
