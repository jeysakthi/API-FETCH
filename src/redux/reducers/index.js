import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducers=combineReducers({
    users:dataReducer
})
export default rootReducers;