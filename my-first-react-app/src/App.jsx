import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import poster from "./assets/red.jpg";

import xbox from "./assets/xbox.svg";
import play from "./assets/play.svg";
import fortnite from "./assets/fortnite.svg";
import steam from "./assets/steam.svg";
import act from "./assets/act.svg";

export default function App() {
    return (
        <div className="app">
            <Navbar></Navbar>
            <div className="logos">
                <div className="logos-slide">
                    <img src={fortnite} alt="" />
                    <img src={act} alt="" />
                    <img src={play} alt="" />
                    <img src={xbox} alt="" />
                    <img src={steam} alt="" />
                    <img src={fortnite} alt="" />
                    <img src={act} alt="" />
                    <img src={play} alt="" />
                    <img src={xbox} alt="" />
                    <img src={steam} alt="" />
                </div>
            </div>
            <section className="homepage">
                <div className="left">
                    <h1>Welcome.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni quis iste quae quisquam. Tenetur numquam nemo
                        perferendis, adipisci cum quod. Quod, quis repellendus
                        voluptatum nam consequuntur blanditiis vero illum
                        officiis.
                    </p>
                    <input type="`text`" />
                    <div className="button-container">
                        <button>Github</button>
                        <button>Go to Library</button>
                    </div>
                </div>
                <div className="right">
                    <img src={poster} alt="" />
                </div>
            </section>
        </div>
    );
}
