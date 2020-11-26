import { combineReducers } from 'redux';
import colors from './colors'
import selectedColor from './selectedColor';

export default combineReducers({
    colors,
    selectedColor
});