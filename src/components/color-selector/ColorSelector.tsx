import React, {ChangeEvent, useState} from "react";
import {connect} from "react-redux";
import {selectColor, SelectColorAction} from "../../store/colors/actions";
import {State} from "../../store/reducers";

interface ColorSelectorStateProps {
    currentColor: Color
}

interface ColorSelectorDispatchProps {
    selectColor: (color: Color) => SelectColorAction
}

interface ColorSelectorProps extends ColorSelectorStateProps, ColorSelectorDispatchProps {
}

export type Color = "Red" | "Green" | "Blue";

const colors: Color[] = ["Red", "Green", "Blue"];

const ColorSelector = ({selectColor, currentColor}: ColorSelectorProps) => {

    const [selectedColor, setSelectedColor] = useState<Color>(currentColor);

    const handleColorSelection = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedColor = event.target.value as Color;
        setSelectedColor(selectedColor);
        selectColor(selectedColor);
    }

    return (
        <div>
            <form>
                {colors.map(color =>
                    <label>
                        <input
                            type="radio"
                            value={color}
                            onChange={handleColorSelection}
                            checked={selectedColor === color}
                        />
                        {color}
                    </label>
                )}
            </form>
        </div>
    );
}

const mapStateToProps = (state: State): ColorSelectorStateProps => ({
    currentColor: state.colors.current
});

const mapDispatchToProps: ColorSelectorDispatchProps = {
    selectColor
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);
