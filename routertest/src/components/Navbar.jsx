import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>React App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
