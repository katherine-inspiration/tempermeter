import React from "react";
import styled from "styled-components";

const Item = (props) => {
    return(
        <div>
            <span className={"date"}>
                {props.date}
            </span>
            <br/>
            <span className={"result_name"}>
                {props.result_name}
            </span>
        </div>
    );
};

const ResultHistoryItem = styled(Item)`
    border:1px ${props => props.primary? '#2E753E': '#FD759C'} solid;
    padding: 15px;
    font-size: 17px;
    .date{
        color: '#4d4d4d';
        font-style: italic;
    }
    .result_name{
        font-weight:bold;
    }
`;

export default ResultHistoryItem