import React from "react";
import styled from "styled-components";

const Item = (props) => {
    console.log(props);
    let options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    let date = new Date(props.date);
    let longDate = date.toLocaleTimeString('ru-RU', options);

    return(
        <div>
            <div className={props.className}>
                <span className={"date"}>
                    {longDate}
                </span>
                <br/>
                <span className={"result_name"}>
                    {props.result_name}
                </span>
            </div>
        </div>
    );
};

const ResultHistoryItem = styled(Item)`
    
    border:1px ${props => props.primary? '#2E753E': '#FD759C'} solid;
    padding: 20px 40px;
    font-size: 17px;
    border-radius: 15px;
    display: inline-block;
    margin: 10px auto;
    .date{
        color: '#4d4d4d';
        font-style: italic;
    }
    .result_name{
        font-weight:bold;
    }
    :hover{
        background-color: ${props => props.primary? '#2E753E': '#FD759C'};
        color: white;
        cursor: pointer;
    }
`;

const render = () => (
    <ResultHistoryItem />
)

export default ResultHistoryItem