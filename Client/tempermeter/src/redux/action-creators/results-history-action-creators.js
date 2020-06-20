import {UPDATE_RESULTS_HISTORY} from "../reducers/results-history-reducer";

export const updateResultsHistoryActionCreator = (newState) => {
    return {
        type: UPDATE_RESULTS_HISTORY,
        newState
    }
};