import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
    useEffect(() => {});
    return (
        <div className="app">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}
