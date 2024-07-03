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
import { Link } from "react-router-dom";
import { format, subDays, addDays, startOfYear, endOfYear } from "date-fns";

export default function Library() {
    const [category, setCategory] = useState({
        genre: "",
        platform: "",
        timePeriod: "Last 30 days",
        section: "timePeriod", // New state for section type
    });
    const [results, setResults] = useState(null);

    const getDatesForTimePeriod = (timePeriod) => {
        const today = new Date();
        switch (timePeriod) {
            case "Last 30 days":
                return `${format(subDays(today, 30), "yyyy-MM-dd")},${format(today, "yyyy-MM-dd")}`;
            case "This week":
                return `${format(today, "yyyy-MM-dd")},${format(addDays(today, 7), "yyyy-MM-dd")}`;
            case "Next week":
                return `${format(addDays(today, 7), "yyyy-MM-dd")},${format(addDays(today, 14), "yyyy-MM-dd")}`;
            case "Best of the year":
                return `${format(startOfYear(today), "yyyy-MM-dd")},${format(endOfYear(today), "yyyy-MM-dd")}`;
            case "Popular in 2023":
                return `2023-01-01,2023-12-31`;
            case "All time top":
                return ""; // No date filter for all time
            default:
                return "";
        }
    };

    const constructUrl = () => {
        const apikey = "59fc59e388264249be02c76b5db71a62";
        let url = `https://api.rawg.io/api/games?key=${apikey}&page_size=10`;

        if (category.platform) {
            url += `&parent_platforms=${category.platform}`;
        }
        if (category.genre) {
            url += `&genres=${category.genre}`;
        }
        const dates = getDatesForTimePeriod(category.timePeriod);
        if (dates) {
            url += `&dates=${dates}`;
        }
        if (category.timePeriod === "All time top") {
            url += `&ordering=-rating`;
        }

        return url;
    };

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const url = constructUrl();
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch game details");
                }
                const data = await response.json();
                const results = data.results.map((game) => ({
                    title: game.name,
                    img: game.background_image,
                    id: game.id,
                }));
                setResults(results);
            } catch (error) {
                console.error("Error fetching game details:", error);
            }
        };

        fetchGameDetails();
    }, [category]);

    const handleCategoryChange = (type, value) => {
        setCategory((prev) => {
            const newCategory = { ...prev, section: type };

            switch (type) {
                case "genre":
                    return {
                        ...newCategory,
                        genre: value,
                        platform: "",
                        timePeriod: "",
                    };
                case "platform":
                    return {
                        ...newCategory,
                        platform: value,
                        genre: "",
                        timePeriod: "",
                    };
                case "timePeriod":
                    return {
                        ...newCategory,
                        timePeriod: value,
                        genre: "",
                        platform: "",
                    };
                default:
                    return newCategory;
            }
        });
    };

    const getTitle = () => {
        switch (category.section) {
            case "timePeriod":
                return category.timePeriod;
            case "genre":
                return category.genre
                    ? category.genre.charAt(0).toUpperCase() +
                          category.genre.slice(1)
                    : "Genre";
            case "platform":
                switch (category.platform) {
                    case "4":
                        return "Windows";
                    case "1":
                        return "Playstation";
                    case "2":
                        return "Xbox One";
                    case "3":
                        return "iOS";
                    default:
                        return "Platform";
                }
            default:
                return "Library";
        }
    };

    if (!results) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <section className="library">
            <div className="side-menu">
                <div className="main-section">
                    <h2>New Releases</h2>
                    <div
                        onClick={() =>
                            handleCategoryChange("timePeriod", "Last 30 days")
                        }
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faStar}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Last 30 days</p>
                    </div>
                </div>
                <div className="main-section">
                    <h2>Top</h2>
                    <div
                        onClick={() =>
                            handleCategoryChange(
                                "timePeriod",
                                "Best of the year",
                            )
                        }
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faTrophy}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Best of the year</p>
                    </div>
                    <div
                        onClick={() =>
                            handleCategoryChange(
                                "timePeriod",
                                "Popular in 2023",
                            )
                        }
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faChartSimple}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Popular in 2024</p>
                    </div>
                    <div
                        onClick={() =>
                            handleCategoryChange("timePeriod", "All time top")
                        }
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faCrown}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>All time top</p>
                    </div>
                </div>
                <div className="main-section">
                    <h2>Platforms</h2>
                    <div
                        onClick={() => handleCategoryChange("platform", "4")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faWindows}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>PC</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("platform", "1")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faXbox}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>PlayStation</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("platform", "2")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faPlaystation}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Xbox One</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("platform", "3")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faApple}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>iOS</p>
                    </div>
                </div>
                <div className="main-section">
                    <h2>Genres</h2>
                    <div
                        onClick={() =>
                            handleCategoryChange("genre", "strategy")
                        }
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faChessKnight}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Strategy</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("genre", "action")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faExplosion}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Action</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("genre", "shooter")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faGun}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Shooter</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("genre", "sports")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faSoccerBall}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Sports</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("genre", "indie")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faFire}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Indie</p>
                    </div>
                    <div
                        onClick={() => handleCategoryChange("genre", "puzzle")}
                        className="section"
                    >
                        <FontAwesomeIcon
                            icon={faHatWizard}
                            className="icon"
                        ></FontAwesomeIcon>
                        <p>Puzzle</p>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="card-container">
                    <h1>{getTitle()}</h1>
                    {results.map((game) => (
                        <Card
                            gameid={game.id}
                            key={game.title}
                            title={game.title}
                            img={game.img}
                        ></Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
