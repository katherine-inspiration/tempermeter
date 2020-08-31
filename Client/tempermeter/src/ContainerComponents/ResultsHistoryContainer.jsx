import {connect} from "react-redux";
import ResultsHistory from "../StyledComponents/ResultsHistory";
import {updateResultsHistoryActionCreator} from "../redux/action-creators/results-history-action-creators";


let mapStateToProps = (state, props) => {
    return {
        user_id:props.user_id,
        resultsHistory:state.resultsHistory,
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