import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Paragraph from "./Paragraph";

let AnswerItem = (props) => {
    let [chosen, setChosen] = useState(false);
    useEffect(()=> {
        setChosen(props.chosen);
    }, [props.chosen]);
    return (
        <Paragraph secondary bold={chosen} className={props.className} onClick = {props.onClick} >
            {props.answer_text}
        </Paragraph>
    );
};

AnswerItem = styled(AnswerItem)`
    :hover{
        cursor:pointer;
    }
    
`;

export default AnswerItem;