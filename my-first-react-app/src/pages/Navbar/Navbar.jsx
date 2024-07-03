import { faL } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.modules.css";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar({ toggleDropDown }) {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [focus, setFocus] = useState(false);
    const focusRef = useRef(null);

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                if (value) {
                    const apikey = "59fc59e388264249be02c76b5db71a62";
                    const url = `https://api.rawg.io/api/games?key=${apikey}&search=${value}`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error("Failed to fetch");
                    }
                    const data = await response.json();
                    const results = data.results.map((game) => ({
                        name: game.name,
                        img: game.background_image,
                        id: game.id,
                    }));
                    const simpleResults = results.slice(0, 3);
                    setResults(simpleResults);
                }
            } catch (error) {
                console.error("Error fetching", error);
            }
        };
        fetchGameDetails();
    }, [value]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                !event.target.closest(".results") &&
                !event.target.closest('input[type="text"]')
            ) {
                setFocus(false);
            }
        }
        if (focus) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [focus]);
    return (
        <nav className="navbar">
            <Link to="/">
                <h2>Game Store</h2>
            </Link>
            <div className="searchbar">
                <input
                    ref={focusRef}
                    onFocus={() => setFocus(true)}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="search games"
                />
                {focus && (
                    <div className="results">
                        {results.map((game) => (
                            <Link key={game.id} to={`/game/${game.id}`}>
                                <div
                                    className="game"
                                    onClick={() => setFocus(false)}
                                >
                                    <p>{game.name}</p>
                                    <img src={game.img} alt={game.name} />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <ul>
                <button onClick={toggleDropDown}>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    Cart
                </button>
            </ul>
        </nav>
    );
}
