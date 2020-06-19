import {combineReducers, createStore} from "redux";
import resultsHistoryReducer from "./reducers/results-history-reducer";
import userInfoReducer from "./reducers/user-info-reducer";
import sessionInfoReducer from "./reducers/session-info-reducer";
import questionsReducer from "./reducers/questions-reducer";

let reducers = combineReducers({
    resultsHistory: resultsHistoryReducer,
    userInfo: userInfoReducer,
    sessionInfo: sessionInfoReducer,
    questions: questionsReducer,
});

let store = createStore(reducers);

export default store;