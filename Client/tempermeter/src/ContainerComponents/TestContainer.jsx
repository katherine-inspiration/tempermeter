import React from "react";
import {connect} from "react-redux";
import Test from "../Components/Test";
import updateSessionIdActionCreator from "../redux/action-creators/session-info-action-creators";
import updateQuestionsActionCreator from "../redux/action-creators/questions-action-creators";

const mapStateToProps = (state) => {
    return {
        session_id: state.sessionInfo.session_id,
        user_id: state.userInfo.user_id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSessionId: (session_id) => {
            dispatch(updateSessionIdActionCreator(session_id));
        },
        updateQuestions: (questions) => {
            dispatch(updateQuestionsActionCreator(questions));
        },
    };
};

const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default TestContainer;