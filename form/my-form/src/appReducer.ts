import { combineReducers } from "redux";
import counter from './reducer/counterReducer';
import { user } from "./reducer/userReducer";
const appReducer = combineReducers(
    {
        counter,
        user
    }
);
export default appReducer;