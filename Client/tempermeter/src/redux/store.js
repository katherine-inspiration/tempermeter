import {combineReducers, createStore} from "redux";
import resultsHistoryReducer from "./reducers/results-history-reducer";
import userInfoReducer from "./reducers/user-info-reducer";

let reducers = combineReducers({
    resultsHistory: resultsHistoryReducer,
    userInfo: userInfoReducer,
})

let store = createStore(reducers);

export default store;