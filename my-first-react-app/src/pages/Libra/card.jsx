import "./card.modules.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../App";

export default function Card({ title, img, gameid }) {
    console.log(typeof gameid);
    const { inCart, addToCart, derivePriceFromGameId } =
        useContext(ShopContext);
    const price = derivePriceFromGameId(gameid);
    return (
        <div className="card">
            <Link key={gameid} to={`/game/${gameid}`}>
                <img src={img} alt="" />
            </Link>
            <div className="card-text">
                {inCart(gameid) ? (
                    <div className="mini">
                        <p className="added">Added ✔</p>
                        <p>${price}</p>
                    </div>
                ) : (
                    <div className="mini">
                        <p onClick={() => addToCart(gameid, img, title, price)}>
                            add to cart +
                        </p>
                        <p>${price}</p>
                    </div>
                )}
                <h2 className="title">{title}</h2>
            </div>
        </div>
    );
}
