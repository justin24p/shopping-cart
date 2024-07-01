import "./card.modules.css";

import {
    faWindows,
    faXbox,
    faPlaystation,
    faApple,
} from "@fortawesome/free-brands-svg-icons";

export default function Card({ title, img }) {
    const imageArray = [faWindows, faXbox, faPlaystation, faApple];
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-text">
                <p>Add to cart +</p>
                <h2 className="title">{title}</h2>
            </div>
        </div>
    );
}
