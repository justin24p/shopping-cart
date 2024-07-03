import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import { useState, useEffect, useRef, createContext } from "react";
import DropDown from "./pages/sidemenu";
import { Outlet } from "react-router-dom";

export const ShopContext = createContext(null);

export default function App() {
    const [cartMenu, togglecartMenu] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // determines if in cart
    function inCart(gameId) {
        return cartItems.find((item) => item.gameId === gameId);
    }

    function addToCart(gameId, img, title) {
        if (cartItems.find((item) => item.gameId === gameId)) {
            return;
        }
        const newCartItem = { gameId: gameId, img: img, title: title };
        setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    }
    const clearCartItems = () => setCartItems([]);

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
            <ShopContext.Provider value={{ inCart, addToCart, cartItems }}>
                <Outlet></Outlet>
            </ShopContext.Provider>
            <DropDown
                cartItems={cartItems}
                ref={dropDownRef}
                clearCartItems={clearCartItems}
                show={cartMenu}
            ></DropDown>
        </div>
    );
}
