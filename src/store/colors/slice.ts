import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Color} from "../../components/color-selector/ColorSelector";

export interface ColorsState {
    current: Color,
    saturation: number
}

const initialState: ColorsState = {current: "Red", saturation: 50};

const colorsSlice = createSlice({
    name: 'colors',
    initialState: initialState,
    reducers: {
        selectColor(state, action: PayloadAction<Color>) {
            state.current = action.payload
        },
        increaseSaturation(state) {
            if (state.saturation < 100 ) state.saturation++
        },
        decreaseSaturation(state) {
            if (state.saturation > 0 ) state.saturation--
        }
    }
});

export default colorsSlice;
