import poster from "../assets/red.jpg";
import xbox from "../assets/xbox.svg";
import play from "../assets/play.svg";
import fortnite from "../assets/fortnite.svg";
import steam from "../assets/steam.svg";
import act from "../assets/act.svg";
import "../App.css";
// so i will be making an api conneciton with rawg
// and it will be used as a search bar when searching
// for games and a small display will appear under the search
// bar with whatever rawg api finds matches the inpout field
//password mimitigremimi
// key 59fc59e388264249be02c76b5db71a6
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Homepage() {
    const [value, setValue] = useState("");

    useEffect(() => {
        if (value) {
            const apikey = "59fc59e388264249be02c76b5db71a62";
            const url = `https://api.rawg.io/api/games?key=${apikey}&search=${value}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
        }
    }, [value]);

    const handleInput = (e) => {
        const vt = typeof e.target.value;
        console.log(vt);
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
                        type="`text`"
                        value={value}
                        onChange={handleInput}
                        placeholder="Search Games..."
                    />
                    <div className="button-container">
                        <button>Github</button>
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
