import "./Navbar.modules.css";
import { Link } from "react-router-dom";

export default function Navbar({ toggleDropDown }) {
    return (
        <nav className="navbar">
            <Link to="/">
                <h2>Game Store</h2>
            </Link>
            <ul>
                <li>About</li>
                <li>Store</li>
                <li>Games</li>
                <li>Learn More</li>
                <button onClick={toggleDropDown}>Cart</button>
            </ul>
        </nav>
    );
}
