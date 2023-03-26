import { useState, useEffect } from "react";
import "normalize.css";
import pads from "./pads";
import "./App.css";

function App() {
    const [currentPad, setCurrentPad] = useState("");

    const playSound = (el) => {
        el.currentTime = 0;
        el.play();
        setCurrentPad(el.dataset.name);
    };

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            playSound(document.getElementById(e.key.toUpperCase()));
        });
    }, []);

    const handleClick = (e) => {
        playSound(e.target.firstElementChild);
    };

    const drumpads = pads.map((k) => {
        return (
            <button
                onClick={handleClick}
                id={`pad${k.keyboard}`}
                key={k.keyboard}
                className="drum-pad button-19">
                {k.keyboard}
                <audio
                    src={k.sound}
                    data-name={k.name}
                    className="clip"
                    id={k.keyboard}
                />
            </button>
        );
    });
    return (
        <div className="app">
            <h1>Drum Machine</h1>
            <div id="drum-machine">
                <div className="pad">{drumpads}</div>
                <div className="controls">
                    <div className="pad-name">
                        <p id="display">{currentPad}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
