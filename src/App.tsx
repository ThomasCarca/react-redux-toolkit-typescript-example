import React from 'react';
import './App.css';
import ColorSelector from "./components/color-selector/ColorSelector";
import ColorDisplay from "./components/color-display/ColorDisplay";
import ColorSaturation from "./components/color-saturation/ColorSaturation";

function App() {
    return (
        <div className="App">
            <ColorSelector/>
            <ColorSaturation/>
            <ColorDisplay/>
        </div>
    );
}

export default App;
