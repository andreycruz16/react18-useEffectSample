import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState(window.localStorage.getItem("name") || "");

  useEffect(() => {
    window.localStorage.setItem("name", name);
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <h2>Side Effect Example</h2>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} />
      </form>
      <br />
      <br />
      {name ? <strong>{name}</strong> : "Please type your name"}
    </div>
  );
}
