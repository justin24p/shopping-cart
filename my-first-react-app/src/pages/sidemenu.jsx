import React from "react";
const DropDown = React.forwardRef((props, ref) => {
    return (
        <div className="dropdown" ref={ref}>
            <div className="dropdown-top">
                <h2>0 Games</h2>
                <p>clear</p>
            </div>
            <p id="total">Total: $0</p>
        </div>
    );
});

export default DropDown;
