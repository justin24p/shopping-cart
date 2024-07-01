import React from "react";
const DropDown = React.forwardRef(({ cartItems, show }, ref) => {
    console.log("show", show);
    const cartCount = cartItems.length;
    return (
        <div className={`dropdown ${show ? "show" : ""}`} ref={ref}>
            <div className="dropdown-top">
                <h2>{cartCount} Games</h2>
                <p>clear</p>
            </div>
            <p id="total">Total: $0</p>
        </div>
    );
});

export default DropDown;
