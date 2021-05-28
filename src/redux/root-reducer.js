

import { combineReducers } from "redux";
import colorReducer from "./color-reducer";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
    //리듀서들을 다 결합하겠다.
    colorReducer,
    authReducer
});

export default rootReducer;