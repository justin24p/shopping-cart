import "./Homepage.modules.css";
import video from "../../assets/valorant.mp4";
//password mimitigremimi
// key 59fc59e388264249be02c76b5db71a6
import { Link } from "react-router-dom";
import react from "../../assets/react.svg";
import vite from "../../assets/vite.svg";
import vercel from "../../assets/vercel.svg";
import npm from "../../assets/npm.svg";

export default function Homepage() {
    return (
        <section className="homepage">
            <video src={video} autoPlay loop muted></video>
            <div className="content-container">
                <div className="text-container">
                    <h1>Game Store</h1>
                    <p>
                        Welcome to my game library project. Feel free to explore
                        and discover more about this project on my GitHub
                        repository linked below. This application utilizes the
                        RAWG API and is crafted using react and its most common
                        features.
                    </p>
                </div>
                <div className="tech-container">
                    <h2>Powered by</h2>
                    <div className="tech-images">
                        <img src={react} alt="" />
                        <img src={vite} alt="" />
                        <img src={vercel} alt="" />
                        <img src={npm} alt="" />
                    </div>
                </div>

                <div className="button-container">
                    <a href=" https://github.com/justin24p">
                        <button>Github</button>
                    </a>
                    <Link to="library">
                        <button>Go to Library</button>
                    </Link>
                    <a href="https://rawg.io/apidocs">
                        <button>Rawg API</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
