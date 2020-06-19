import React from "react";
import {connect} from "react-redux";
import ResultsHistory from "../StyledComponents/ResultsHistory";
import {updateResultsHistoryActionCreator} from "../redux/action-creators/results-history-action-creators";


let mapStateToProps = (state) => {
    return {
        resultsHistory: state.resultsHistory
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateResultsHistory: (newState) => {
            dispatch(updateResultsHistoryActionCreator(newState));
        }
    };
};

const ResultsHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(ResultsHistory);



export default ResultsHistoryContainer;