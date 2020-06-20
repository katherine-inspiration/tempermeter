import React, {useState} from "react";
import Button from "../StyledComponents/Button";
import Title from "../StyledComponents/Title";
import ResultsHistoryContainer from "../ContainerComponents/ResultsHistoryContainer";
import {NavLink} from "react-router-dom";

const Home = (props) => {
    const startSession = () => {
        return fetch('/api/session/start/' + props.user_id)
            .then(response => {
                console.log(response);
                return response.json()})
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    const runTestHandler = () => {
        startSession();
    };

    return (
        <div>
            <Button primary as={NavLink} to={'/test/1'} onClick={runTestHandler}>
                Пройти тест
            </Button>
            <Title secondary>
                История
            </Title>
            <ResultsHistoryContainer user_id={props.user_id} />
        </div>
    );
};

export default Home;