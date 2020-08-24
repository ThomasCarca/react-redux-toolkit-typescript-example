import React from "react";
import {connect} from "react-redux";
import {ActionCreatorWithoutPayload} from "@reduxjs/toolkit";
import colorsSlice from "../../store/colors/slice";

const {decreaseSaturation, increaseSaturation} = colorsSlice.actions;

interface ColorSaturationDispatchProps {
    increaseSaturation: ActionCreatorWithoutPayload
    decreaseSaturation: ActionCreatorWithoutPayload
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
};

const mapDispatchToProps: ColorSaturationDispatchProps = {
    increaseSaturation,
    decreaseSaturation
};

export default connect(null, mapDispatchToProps)(ColorSaturation);
