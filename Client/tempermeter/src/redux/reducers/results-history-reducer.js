export const UPDATE_RESULTS_HISTORY = 'UPDATE-RESULTS-HISTORY';

const initialState = [
];

const resultsHistoryReducer = (state = initialState, action) => {
    let stateCopy = [...state];
    switch(action.type){
        case UPDATE_RESULTS_HISTORY:
            return action.newState;
        default:
            return state;
    }

};

export default resultsHistoryReducer;