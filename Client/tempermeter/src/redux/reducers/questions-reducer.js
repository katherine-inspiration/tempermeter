export const UPDATE_QUESTIONS = 'UPDATE-QUESTIONS';

const questionsReducer = (state = [], action) => {
    switch(action.type){
        case UPDATE_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
};

export default questionsReducer;