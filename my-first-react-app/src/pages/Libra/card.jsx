import "./card.modules.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../App";

export default function Card({ title, img, gameid }) {
    const { inCart, addToCart } = useContext(ShopContext);
    const hello = inCart;

    return (
        <div className="card">
            <Link key={gameid} to={`/game/${gameid}`}>
                <img src={img} alt="" />
            </Link>
            <div className="card-text">
                {inCart(gameid) ? (
                    <p className="added">Added ✔</p>
                ) : (
                    <p onClick={() => addToCart(gameid, img, title)}>
                        add to cart +
                    </p>
                )}
                <h2 className="title">{title}</h2>
            </div>
        </div>
    );
}
