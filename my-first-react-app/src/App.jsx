import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DropDown from "./pages/sidemenu";

export default function App() {
    const [cart, toggleCart] = useState(false);
    const dropDownRef = useRef(null);

    const toggleDropDown = () => {
        console.log("toggling!");
        toggleCart(!cart);
    };

    useEffect(() => {
        // Function to close dropdown when clicking outside
        function handleClickOutside(event) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target)
            ) {
                toggleCart(false);
            }
        }

        // Add event listener when dropdown is open
        if (cart) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Clean up the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [cart]);

    return (
        <div className="app">
            <Navbar toggleDropDown={toggleDropDown}></Navbar>
            <Outlet></Outlet>
            {cart && <DropDown ref={dropDownRef}></DropDown>}
        </div>
    );
}
// useref is a react hook that can store multiple value types similar to state except it doesnt
// trigger re renders
