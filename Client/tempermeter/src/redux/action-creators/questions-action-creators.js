import {UPDATE_QUESTIONS} from "../reducers/questions-reducer";

const updateQuestionsActionCreator = (questions) => {
    return{
        type: UPDATE_QUESTIONS,
        questions
    }
};

export default updateQuestionsActionCreator;