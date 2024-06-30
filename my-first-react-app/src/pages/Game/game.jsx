import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./game.modules.css";

export default function Game() {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        // Fetch game details based on gameId
        const fetchGameDetails = async () => {
            try {
                const apikey = "59fc59e388264249be02c76b5db71a62";
                const url = `https://api.rawg.io/api/games/${gameId}?key=${apikey}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch game details");
                }
                const data = await response.json();
                console.log(data);
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
                <div>Game</div>
                <h2>{game.name}</h2>
            </div>
            <div className="game">
                <div className="img-container"></div>
                <div className="right-side">
                    <div className="text">
                        <p>{game.description_raw}</p>
                    </div>
                    <div className="cart"></div>
                </div>
            </div>
        </div>
    );
}
