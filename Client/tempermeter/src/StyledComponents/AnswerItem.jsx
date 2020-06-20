import styled from "styled-components";
import React from "react";
import Paragraph from "./Paragraph";

let AnswerItem = (props) => {
    return (
        <Paragraph>
            {props.answer_text}
        </Paragraph>
    );
};

AnswerItem = styled(AnswerItem)`

`;

export default AnswerItem;