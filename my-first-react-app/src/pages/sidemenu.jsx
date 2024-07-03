import React from "react";

const DropDown = React.forwardRef(
    ({ cartItems, show, clearCartItems }, ref) => {
        console.log("show", show);
        const cartCount = cartItems.length;
        return (
            <div className={`dropdown ${show ? "show" : ""}`} ref={ref}>
                <div className="dropdown-top">
                    <h2>{cartCount} Games</h2>
                    <p onClick={clearCartItems}>clear</p>
                </div>
                <div className="cart">
                    {cartItems.map((game) => (
                        <div className="cartmenu-cont">
                            <img src={game.img} alt="" />
                            <p>{game.title}</p>
                        </div>
                    ))}
                </div>
                <p id="total">Total: $0</p>
            </div>
        );
    },
);

export default DropDown;
