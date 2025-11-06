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

    // 4️⃣ Change window title
    document.title = "User Directory 🌍";
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.username.toLowerCase().includes(search.toLowerCase()) // 3️⃣ + 8️⃣ New searchable field
  );

  const clearFilter = () => setSearch("");

  return (
    <div className="app">
      <header className="header">
        {/* 5️⃣ Change page title */}
        <h1>🌐 User Finder Directory</h1>

        <input
          className={`search ${search ? "active" : ""}`}
          type="text"
          placeholder="🔍 Search by name, email, or username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 1️⃣ Add “Clear Filter” button */}
        <button className="clear-btn" onClick={clearFilter}>
          ❌ Clear Filter
        </button>
      </header>

      {/* 12️⃣ Horizontal line */}
      <hr className="divider" />

      {/* 2️⃣ Show total results */}
      <p className="meta">
        Showing {filtered.length} of {users.length} users
      </p>

      <ul className="list">
        {filtered.map((u) => (
          <li className="card" key={u.id}>
            {/* 10️⃣ Add emojis/icons */}
            <div className="title">👤 {u.name}</div>
            <div className="muted">📧 {u.email}</div>
            <div className="muted">💻 @{u.username}</div>
            <div className="muted">🏙️ {u.address.city}</div> {/* 13️⃣ New attribute */}
            <a
              className="link"
              href={`http://${u.website}`}
              target="_blank"
              rel="noreferrer"
            >
              🌎 {u.website}
            </a>
          </li>
        ))}
      </ul>

      {/* 11️⃣ Footer message */}
      <footer className="footer">
        <p>🐼Made with 🖕🏼 NacckL 🐼</p>
      </footer>
    </div>
  );
}

export default App;
