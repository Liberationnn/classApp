import {combineReducers} from 'redux';
import home from './reducers/home';
import profile from './reducers/profile';

export default combineReducers({
    home,
    profile
});