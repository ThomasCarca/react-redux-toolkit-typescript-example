import {combineReducers} from 'redux'
import colors, {ColorsState} from './colors/reducers'

export interface State {
    colors: ColorsState
}

export default combineReducers({
    colors
})
