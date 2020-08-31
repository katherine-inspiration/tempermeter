import React, {useCallback, useEffect, useState} from "react";
import ResultHistoryItem from "../StyledComponents/ResultsHistoryItem";
import Paragraph from "../StyledComponents/Paragraph";
import Preloader from "../StyledComponents/Preloader";

const ResultsHistory = (props) => {
    const [isHistoryFetching, setHistoryFetching] = useState(false);
    const [resultsHistory, setResultsHistory] = useState([]);
    const [resultHistoryItems, setResultHistoryItems] = useState([]);
    const [isInitialized, setInitialized] = useState(false);

    const updateHistory = useCallback(() => {
        if (!isInitialized) {
            setHistoryFetching(true);
            console.log('fetching /api/sessions/' + props.user_id);
            return fetch('/api/sessions/' + props.user_id)
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        props.updateResultsHistory(result);
                    }
                    console.log(result);
                    setHistoryFetching(false);
                    //setResultsHistory([...result]);
                    return result;

                })
                .catch(err => console.log(err));
        }
    }, [isInitialized, props.user_id]);

    useEffect(() => {
        setResultsHistory(props.resultsHistory);
    }, [props.resultsHistory]);


    useEffect(() => {
        updateHistory()
    }, [isInitialized, updateHistory]);

    useEffect(() => {
        console.log("Getting history items");
        console.log(resultsHistory);
        if (resultsHistory.length > 0) {
            setResultHistoryItems(resultsHistory.map(item => <ResultHistoryItem {...item}
                                                                                key={item.session_id}
                                                                                onClick={() => {
                                                                                    props.history.push('/result/' + item.session_id);
                                                                                }}
            />));
            setInitialized(true);
        } else {
            setResultHistoryItems(
                <Paragraph>
                    Ваша история пуста. Вы еще ни разу не проходили тест.
                </Paragraph>);
        }
    }, [resultsHistory, props.resultsHistory, props.history]);

    return (
        <div>
            {isHistoryFetching ? <Preloader/> : resultHistoryItems}
        </div>
    );
};

export default ResultsHistory;