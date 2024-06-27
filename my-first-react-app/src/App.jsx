import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
    // so i will be making an api conneciton with rawg
    // and it will be used as a search bar when searching
    // for games and a small display will appear under the search
    // bar with whatever rawg api finds matches the inpout field
    useEffect(() => {});
    return (
        <div className="app">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}
