import { useState } from "react";

// Create stateless function
const Create = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = { first, second, title };
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    setFirst("");
    setSecond("");
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        type="text"
        required
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <label>Second Name:</label>
      <input
        type="text"
        required
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <label>Title</label>
      <select value={title} onChange={(e) => setTitle(e.target.value)}>
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option>
        <option value="dr">Dr</option>
      </select>
      <button>Add User</button>
    </form>
  );
};

export default Create;
