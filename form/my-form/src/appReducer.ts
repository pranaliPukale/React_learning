import { combineReducers } from "redux";
import counter from './reducer/counterReducer';
const appReducer = combineReducers(
    {
        counter
        }
);
export default appReducer;