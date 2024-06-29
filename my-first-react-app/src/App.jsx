import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef, createContext } from "react";
import DropDown from "./pages/sidemenu";

// now that the context is declared wrap the outlet context provider around outlet
// as theres no need to wrap around navbar or drowndown as we can pass it directly as a prop
//
export const ShopContext = createContext(null);

export default function App() {
    const [cartMenu, togglecartMenu] = useState(false);
    const [cartItems, setCartItems] = useState(["wheat", "apples", "oranges"]);
    const dropDownRef = useRef(null);

    const toggleDropDown = () => {
        console.log("toggling!");
        togglecartMenu(!cartMenu);
    };

    useEffect(() => {
        // Function to close dropdown when clicking outside
        function handleClickOutside(event) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target)
            ) {
                togglecartMenu(false);
            }
        }

        // Add event listener when dropdown is open
        if (cartMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Clean up the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [cartMenu]);

    return (
        <div className="app">
            <Navbar toggleDropDown={toggleDropDown}></Navbar>
            <ShopContext.Provider value={{ cartItems, setCartItems }}>
                <Outlet></Outlet>
            </ShopContext.Provider>
            {cartMenu && (
                <DropDown cartItems={cartItems} ref={dropDownRef}></DropDown>
            )}
        </div>
    );
}
