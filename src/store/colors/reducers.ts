import {Color} from "../../components/color-selector/ColorSelector";
import {DECREASE_SATURATION, INCREASE_SATURATION, SELECT_COLOR} from "./constants";
import {ColorsActionTypes} from "./actions";

export interface ColorsState {
    current: Color,
    saturation: number
}

const initialState: ColorsState = {current: "Red", saturation: 50}

const MAX_SATURATION = 100;
const MIN_SATURATION = 0;

const reducers = (state: ColorsState = initialState, action: ColorsActionTypes): ColorsState => {
    const {saturation} = state;
    switch (action.type) {
        case SELECT_COLOR:
            return {
                ...state,
                current: action.payload
            }
        case INCREASE_SATURATION:
            return {
                ...state,
                saturation: saturation === MAX_SATURATION ? MAX_SATURATION : saturation + 1
            }
        case DECREASE_SATURATION:
            return {
                ...state,
                saturation: saturation === MIN_SATURATION ? MIN_SATURATION : saturation - 1
            }
        default:
            return state
    }
}

export default reducers;
