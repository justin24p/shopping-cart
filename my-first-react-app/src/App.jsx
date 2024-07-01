import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef, createContext } from "react";
import DropDown from "./pages/sidemenu";
import video from "./assets/valorant.mp4";
import Homepage from "./pages/Homepage/Homepage";

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
            <DropDown
                cartItems={cartItems}
                ref={dropDownRef}
                show={cartMenu}
            ></DropDown>
        </div>
    );
}
