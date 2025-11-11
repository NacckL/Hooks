
## 1. Understanding Promises
A `Promise` in JavaScript represents a value that will be available sometime in the future.

It has three possible states:
- `Pending`: waiting for a result
- `Fulfilled`: completed successfully (→ .then())
- `Rejected`: failed (→ .catch())  

`Promises` allow JavaScript to handle asynchronous operations, actions that take time (like fetching data from an API) without freezing the rest of the program.

💻 Example
```
console.log("Start");

new Promise((resolve, reject) => {
  const success = true; // change to false to simulate an error
  setTimeout(() => {
    if (success) resolve("Data received!");
    else reject("Something went wrong!");
  }, 2000);
})
  .then((message) => console.log("✅", message))
  .catch((error) => console.error("❌", error));

console.log("End");
```


🗣️ The console will print:
```
Start
End
✅ Data received!  // (after 2 seconds)


or, if success = false:

Start
End
❌ Something went wrong!
```

⚙️ 2. Simulating “`Loading`” and “`Error`” in the Console
Before we move to React, we can simulate what happens during a request:

While waiting → "Loading..."

If success → show data

If error → show error message

💻 Example
console.log("Loading data...");

setTimeout(() => {
  const success = Math.random() > 0.5; // random success/failure
  if (success) {
    console.log("✅ Data loaded successfully!");
  } else {
    console.error("❌ Error loading data!");
  }
}, 2000);


🕐 You’ll see “Loading data…”, then after 2 seconds either success ✅ or error ❌.

## 3. React — Basic Loading, Error and Data States
In React, we represent these states with `useState`:
- loading → waiting for a response  
- error → something went wrong  
- data → the information received  

💻 Example
```
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        setData(["Alice", "Bob", "Charlie"]);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <ul>
      {data.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}

export default App;
```

🧩 Concept:
React re-renders when a state changes, showing different messages for each case.

🌐 4. React with Fetch and Promises
🧠 Theory

The fetch() function returns a Promise — it first downloads data (pending), then converts it (fulfilled), or fails (rejected).

💻 Example
useEffect(() => {
  setLoading(true);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())  // convert to JS object
    .then((data) => setData(data))  // update state
    .catch(() => setError(true))    // if something fails
    .finally(() => setLoading(false));
}, []);


💬 What happens here:

Pending → loading = true

Fulfilled → data shown on screen

Rejected → show an error message

🎨 5. Introducing Visual Loading and Error States
🧠 Theory

User interfaces should show clear visual feedback:

A spinner or image while loading

A warning image when there’s an error

💻 Example
if (loading)
  return (
    <div>
      <img src="/images/loading.gif" alt="Loading..." width="80" />
      <p>Loading data...</p>
    </div>
  );

if (error)
  return (
    <div>
      <img src="/images/error.png" alt="Error!" width="80" />
      <p>Something went wrong.</p>
    </div>
  );


🖼️ Suggested images:

loading.gif → a simple spinning loader
(💡 Example placeholder:
)

error.png → a red error icon
(💡 Example placeholder:
)

🧩 6. Final Result — React with Fetch, Loading and Error
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div>
        <img src="/images/loading.gif" alt="Loading..." width="60" />
        <p>Loading users...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <img src="/images/error.png" alt="Error" width="60" />
        <p>Unable to load users.</p>
      </div>
    );

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
