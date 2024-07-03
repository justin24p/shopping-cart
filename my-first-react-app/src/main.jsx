import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Library from "./pages/Libra/library.jsx";
import Cart from "./pages/cart.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Game from "./pages/Game/game.jsx";
import { ShopContext } from "./App.jsx";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// if i want to make the routes work i need to make
// an outlet and declare them as children of app
// so my navbar doesnt rerender each time

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            { path: "/", element: <Homepage></Homepage> },
            { path: "/library", element: <Library></Library> },
            { path: "/cart", element: <Cart></Cart> },
            { path: "/game/:gameId", element: <Game></Game> },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);
