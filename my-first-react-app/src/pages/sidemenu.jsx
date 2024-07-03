import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const DropDown = React.forwardRef(
    (
        { cartItems, show, clearCartItems, clearClickedItem, totalprice },
        ref,
    ) => {
        const cartCount = cartItems.length;
        return (
            <div className={`dropdown ${show ? "show" : ""}`} ref={ref}>
                <div className="dropdown-top">
                    <h2>{cartCount} Games</h2>
                    <p onClick={clearCartItems}>clear</p>
                </div>
                <div className="cart">
                    {cartItems.map((game) => (
                        <div key={game.gameId} className="cartmenu-cont">
                            <FontAwesomeIcon
                                onClick={() => clearClickedItem(game.gameId)}
                                className="trash-icon"
                                icon={faTrashCan}
                            ></FontAwesomeIcon>
                            <div className="cart-bottom">
                                <Link
                                    key={game.gameId}
                                    to={`/game/${game.gameId}`}
                                >
                                    <img src={game.img} alt="" />
                                </Link>
                                <p>{game.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p id="total">Total: ${totalprice}</p>
            </div>
        );
    },
);

export default DropDown;
