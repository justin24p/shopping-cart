import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./game.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { ShopContext } from "../../App";

export default function Game() {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);
    const { inCart, addToCart, derivePriceFromGameId } =
        useContext(ShopContext);
    const intGameId = parseInt(gameId);

    const price = derivePriceFromGameId(gameId);

    useEffect(() => {
        // Fetch game details based on gameId
        const fetchGameDetails = async () => {
            try {
                const apikey = "59fc59e388264249be02c76b5db71a62";
                const url = `https://api.rawg.io/api/games/${gameId}?key=${apikey}`;
                const response = await fetch(url, {
                    mode: "cors",
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch game details");
                }
                const data = await response.json();
                setGame(data);
            } catch (error) {
                console.error("Error fetching game details:", error);
            }
        };

        fetchGameDetails();
    }, [gameId]);

    if (!game) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div className="game-container">
            <div className="nav">
                <Link to="/library">
                    <h3>
                        <FontAwesomeIcon
                            className="back-icon"
                            icon={faArrowLeft}
                        ></FontAwesomeIcon>
                        Go back
                    </h3>
                </Link>
                <h2>{game.name}</h2>
            </div>
            <div className="game-sec">
                <div className="img-container">
                    <img src={game.background_image} alt="" />
                </div>
                <div className="right-side">
                    <div className="text">
                        <h3>Description</h3>
                        <p>{game.description_raw}</p>
                    </div>
                    <div className="bottom-text">
                        <p>${price}</p>
                        {inCart(intGameId) ? (
                            <p className="added">Added ✔</p>
                        ) : (
                            <p
                                onClick={() =>
                                    addToCart(
                                        intGameId,
                                        game.background_image,
                                        game.name,
                                        price,
                                    )
                                }
                            >
                                add to cart +
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
