import { combineReducers } from "redux";
import colorReducer from "./color-reducer";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
    //리듀서들을 다 결합하겠다.
    colorReducer,
    authReducer //나중에 state 에 접근할때 이 이름으로 접근하기 때문에, 이름 중요!
});

export default rootReducer;