import React, {useEffect, useState} from "react";
import ResultHistoryItem from "../StyledComponents/ResultsHistoryItem";
import Paragraph from "../StyledComponents/Paragraph";
import Preloader from "../StyledComponents/Preloader";
import {useHistory} from "react-router-dom";

const ResultsHistory = (props) => {
    const [isHistoryFetching, setHistoryFetching] = useState(false);
    const [resultsHistory, setResultsHistory] = useState([]);
    const [resultHistoryItems, setResultHistoryItems] = useState([]);
    const [isInitialized, setInitialized] = useState(false);

    const history = useHistory();

    const updateHistory = () => {
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
    };

    useEffect(() => {
        setResultsHistory(props.resultsHistory);
    }, [props.resultsHistory]);


    useEffect(() => {
        updateHistory()
    }, [isInitialized]);
    useEffect(() => {
        console.log("Getting history items");
        console.log(resultsHistory);
        if (resultsHistory.length > 0) {
            setResultHistoryItems(resultsHistory.map(item => <ResultHistoryItem {...item}
                                                                                key={item.session_id}
                                                                                onClick={() => {
                                                                                    history.push('/result/' + item.session_id);
                                                                                }}
            />));
            setInitialized(true);
            console.log(resultHistoryItems);
        } else {
            setResultHistoryItems(
                <Paragraph>
                    Ваша история пуста. Вы еще ни разу не проходили тест.
                </Paragraph>);
        }
    }, [resultsHistory, props.resultsHistory]);

    return (
        <div>
            {isHistoryFetching ? <Preloader/> : resultHistoryItems}
        </div>
    );
};

export default ResultsHistory;