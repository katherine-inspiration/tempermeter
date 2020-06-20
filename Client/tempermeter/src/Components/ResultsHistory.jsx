import React, {useEffect, useState} from "react";
import ResultHistoryItem from "../StyledComponents/ResultsHistoryItem";
import Paragraph from "../StyledComponents/Paragraph";
import Preloader from "../StyledComponents/Preloader";

const ResultsHistory = (props) => {
    let [isInitialized, setInitialized] = useState(false);
    let [isHistoryFetching, setHistoryFetching] = useState(false);
    let [resultsHistory, setResultsHistory] = useState([]);

    const updateHistory = () => {
        setHistoryFetching(true);
        console.log('fetching /api/history/results/' + props.user_id);
        return fetch('/api/history/results/' + props.user_id)
            .then(response => response.json())
            .then(result => {
                console.log('result');
                console.log(result);
                if (result)
                    props.updateResultsHistory(result);
                setInitialized(true);
                setHistoryFetching(false);
                setResultsHistory(result);
                return result;
            })
            .catch(err => console.log(err));
    };

    if(!isInitialized) {
        updateHistory();
        setInitialized(true);
    };


    let items = props.resultsHistory.length>0?
        resultsHistory.map( item => <ResultHistoryItem {...item} key={item.session_id} /> ) :
        (<Paragraph>
            Ваша история пуста. Вы еще ни разу не проходили тест.
        </Paragraph>)
    ;
    return(
      <div>
          {isHistoryFetching?<Preloader/>:items}
      </div>
    );
};

export default ResultsHistory;