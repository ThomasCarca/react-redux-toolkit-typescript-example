import React from "react";
import {
    decreaseSaturation,
    DecreaseSaturation,
    increaseSaturation,
    IncreaseSaturation
} from "../../store/colors/actions";
import {connect} from "react-redux";

interface ColorSaturationDispatchProps {
    increaseSaturation: () => IncreaseSaturation
    decreaseSaturation: () => DecreaseSaturation
}

interface ColorSaturationProps extends ColorSaturationDispatchProps {
}

const ColorSaturation = ({increaseSaturation, decreaseSaturation}: ColorSaturationProps) => {
    return (
        <div className="inline">
            <button className="button" onClick={decreaseSaturation}>-</button>
            <p>Saturation</p>
            <button className="button" onClick={increaseSaturation}>+</button>
        </div>
    );
}

const mapDispatchToProps: ColorSaturationDispatchProps = {
    increaseSaturation,
    decreaseSaturation
}

export default connect(null, mapDispatchToProps)(ColorSaturation);
