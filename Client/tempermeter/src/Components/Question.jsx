import React from "react";
import Paragraph from "../StyledComponents/Paragraph";

const Question = (props) => {
    return (
        <Paragraph primary>
            {props.question_text}
        </Paragraph>
    );
};

export default Question;