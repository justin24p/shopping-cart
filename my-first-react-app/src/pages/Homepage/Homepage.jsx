import poster from "./red.jpg";
import xbox from "../../assets/xbox.svg";
import play from "../../assets/play.svg";
import fortnite from "../../assets/fortnite.svg";
import steam from "../../assets/steam.svg";
import act from "../../assets/act.svg";
import "./Homepage.modules.css";

//password mimitigremimi
// key 59fc59e388264249be02c76b5db71a6
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function Homepage() {
    // we shouldnt render based on results instead on if searchbar is focused or not
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [focus, setFocus] = useState(false);
    const focusRef = useRef(null);

    // use effect that fetches games for search bar
    useEffect(() => {
        if (value) {
            const apikey = "59fc59e388264249be02c76b5db71a62";
            const url = `https://api.rawg.io/api/games?key=${apikey}&search=${value}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const simpleResults = data.results.map((game) => ({
                        name: game.name,
                        src: game.background_image,
                    }));
                    const slicedResults = simpleResults.slice(0, 3);
                    setResults(slicedResults);
                    console.log("results", results);
                })
                .catch((error) => console.error(error));
        }
    }, [value]);

    // use effect for toggling search bar of if we click off
    useEffect(() => {
        function handleClickOutside(event) {
            if (focusRef.current && !focusRef.current.contains(event.target)) {
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

    const handleInput = (e) => {
        const vt = typeof e.target.value;
        setValue(e.target.value);
    };

    return (
        <div className="homepage-container">
            <div className="logos">
                <div className="logos-slide">
                    <img src={fortnite} alt="" />
                    <img src={act} alt="" />
                    <img src={play} alt="" />
                    <img src={xbox} alt="" />
                    <img src={steam} alt="" />
                    <img src={fortnite} alt="" />
                    <img src={act} alt="" />
                    <img src={play} alt="" />
                    <img src={xbox} alt="" />
                    <img src={steam} alt="" />
                </div>
            </div>
            <section className="homepage">
                <div className="left">
                    <h1>Welcome.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni quis iste quae quisquam. Tenetur numquam nemo
                        perferendis, adipisci cum quod. Quod, quis repellendus
                        voluptatum nam consequuntur blanditiis vero illum
                        officiis.
                    </p>
                    <input
                        ref={focusRef}
                        type="`text`"
                        value={value}
                        onFocus={() => setFocus(true)}
                        onChange={handleInput}
                        placeholder="Search Games..."
                    />
                    // if input is focused render below else dont // we can use
                    state for that
                    {focus && (
                        <div className="results">
                            {results.map((game) => (
                                <div className="game">
                                    <p>{game.name}</p>
                                    <img src={game.src} />
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="button-container">
                        <a href=" https://github.com/justin24p">
                            <button>Github</button>
                        </a>
                        <Link to="library">
                            <button>Go to Library</button>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <img src={poster} alt="" />
                </div>
            </section>
        </div>
    );
}
