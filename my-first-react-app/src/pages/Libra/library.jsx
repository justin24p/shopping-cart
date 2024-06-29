import "./library.modules.css";

// icon related imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faTrophy,
    faChartSimple,
    faCrown,
    faChessKnight,
    faExplosion,
    faGun,
    faSoccerBall,
    faFire,
    faHatWizard,
} from "@fortawesome/free-solid-svg-icons";
import {
    faWindows,
    faXbox,
    faPlaystation,
    faApple,
} from "@fortawesome/free-brands-svg-icons";

// react related imports
import { useState, useEffect } from "react";
import Card from "./card";

// cart logic
// since its a gamestore you can only own a game once
// therfore max product is one
// we
export default function Library() {
    const [category, setCategory] = useState("Last 30 days");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const apikey = "59fc59e388264249be02c76b5db71a62";
        const value = 2;
        const url = `https://api.rawg.io/api/games?key=${apikey}&parent_platform=${value}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // the data itself is not a mappable feature since its an object not array
                // therfore we must do data.results.map
                // might need to implement a clean up function for the api here and in homepage
                const results = data.results.map((game) => ({
                    title: game.name,
                    img: game.background_image,
                }));
                setResults(results);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleCategoryChange = () => {};

    return (
        <section className="library">
            <div className="side-menu">
                <div className="main-section">
                    <h2>New Releases</h2>
                    <div onClick={handleCategoryChange} className="section">
                        <FontAwesomeIcon
                            icon={faStar}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Last 30 days</p>
                    </div>
                </div>
                <div className="main-section">
                    <h2>Top</h2>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faTrophy}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Best of the year</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faChartSimple}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Popular in 2024</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faCrown}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>All time top</p>
                    </div>
                </div>
                <div className="main-section">
                    <h2>Platforms</h2>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faWindows}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>PC</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faXbox}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>PlayStation</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faPlaystation}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Xbox One</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faApple}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>iOS</p>
                    </div>
                </div>
                <div className="main-section">
                    <h2>Genres</h2>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faChessKnight}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Strategy</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faExplosion}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Action</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faGun}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Shooter</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faSoccerBall}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Sports</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faFire}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Survival</p>
                    </div>
                    <div className="section">
                        <FontAwesomeIcon
                            icon={faHatWizard}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>RPG</p>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="card-container">
                    <h1>Last 30 days</h1>
                    {results &&
                        results.map((game) => (
                            <Card title={game.title} img={game.img}></Card>
                        ))}
                </div>
            </div>
        </section>
    );
}
