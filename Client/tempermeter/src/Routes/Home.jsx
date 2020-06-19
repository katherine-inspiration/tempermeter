import React, {useState} from "react";
import Button from "../StyledComponents/Button";
import Title from "../StyledComponents/Title";
import ResultsHistoryContainer from "../ContainerComponents/ResultsHistoryContainer";
import {NavLink} from "react-router-dom";

const Home = (props) => {
    let [sessionId, setSessionId] = useState(null);
    const startSession = () => {
        return fetch('/api/session/start/' + props.user_id)
            .then(response => {
                console.log(response);
                return response.json()})
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };
    const getSessionId = () => {
        return fetch('/api/session/' + props.user_id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setSessionId(result);
                return result;
            })
            .catch(err => console.log(err));
    };

    const runTestHandler = () => {
        startSession()
            .then(() => getSessionId())
    };

    return (
        <div>
            <Button primary as={NavLink} to={'/test/1'} onClick={runTestHandler}>
                Пройти тест
            </Button>
            <Title secondary>
                История
            </Title>
            <ResultsHistoryContainer/>
        </div>
    );
};

export default Home;