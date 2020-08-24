import {Color} from "../../components/color-selector/ColorSelector";
import {DECREASE_SATURATION, INCREASE_SATURATION, SELECT_COLOR} from "./constants";


export interface SelectColorAction {
    type: typeof SELECT_COLOR
    payload: Color
}

export interface IncreaseSaturation {
    type: typeof INCREASE_SATURATION
}

export interface DecreaseSaturation {
    type: typeof DECREASE_SATURATION
}

export type ColorsActionTypes = SelectColorAction | IncreaseSaturation | DecreaseSaturation;


export const selectColor = (color: Color): SelectColorAction => ({
    type: SELECT_COLOR,
    payload: color
})

export const increaseSaturation = (): IncreaseSaturation => ({
    type: INCREASE_SATURATION
})

export const decreaseSaturation = (): DecreaseSaturation => ({
    type: DECREASE_SATURATION
})
