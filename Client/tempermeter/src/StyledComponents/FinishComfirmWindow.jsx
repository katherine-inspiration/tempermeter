import React from "react";
import styled from "styled-components";
import Button from "./Button";
import {NavLink} from "react-router-dom";

let FinishConfirmWindow = props => {

    const yesHandler = () => {
        props.showFinishConfirmation(false);
        props.history.push('/result/' + props.sessionId);

    };

    const noHandler = () => {
        props.showFinishConfirmation(false);
    };

    return (
        <div className={props.className}>
            <div className={"wrapper"}>
                <p> Вы уверены, что хотите завершить тестирование?</p>
                <Button secondary className={"no"} onClick={noHandler}>
                    Нет
                </Button>
                <Button  primary className={"yes"} onClick={yesHandler}>
                    Да
                </Button>
            </div>
        </div>
    );
};

FinishConfirmWindow = styled(FinishConfirmWindow)`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(33, 33, 33, 0.81);    
    .wrapper{
        background-color: white;
        border: 1px black solid;
        width: 800px;
        margin: 200px auto;
        padding: 20px;
        text-align: center;
        
        .yes{
            border: none;
        }
    }
`;

export default FinishConfirmWindow;