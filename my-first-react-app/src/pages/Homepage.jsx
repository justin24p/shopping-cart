import poster from "../assets/red.jpg";
import xbox from "../assets/xbox.svg";
import play from "../assets/play.svg";
import fortnite from "../assets/fortnite.svg";
import steam from "../assets/steam.svg";
import act from "../assets/act.svg";
import "../App.css";

import { Link } from "react-router-dom";

export default function Homepage() {
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
                    <input type="`text`" placeholder="Search Games..." />
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
