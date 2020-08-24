import React from "react";
import {Color} from "../color-selector/ColorSelector";
import {connect} from "react-redux";
import {State} from "../../index";

interface ColorDisplayStateProps {
    color: Color
    saturation: number
}

interface ColorDisplayProps extends ColorDisplayStateProps {
}

const ColorDisplay = ({color, saturation}: ColorDisplayProps) => {
    return (
        <div className="display">
            You have selected {color} ({saturation})
        </div>
    );
};

const mapStateToProps = (state: State): ColorDisplayStateProps => ({
    color: state.colors.current,
    saturation: state.colors.saturation
});

export default connect(mapStateToProps)(ColorDisplay);
