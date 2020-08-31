import React, {useEffect, useState, useCallback} from "react";
import styled from "styled-components";
import AnswerItem from "./AnswerItem";
import Preloader from "./Preloader";

let Answers = (props) => {
    let [answers, setAnswers] = useState([]);
    let [isFetching, setFetching] = useState(true);
    let [answerItems, setAnswerItems] = useState(null);


    const getAnswers = useCallback((question_id) => {
        console.log("Fetching answers for question " + question_id);
        if (question_id) {
            return fetch('/api/answers/' + question_id)
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(result => {
                    console.log(result);
                    setAnswers(result);
                    setFetching(false);
                    return result;
                })
                .catch(err => console.log(err));
        } else {
            return [];
        }
    }, []);

    useEffect(() => {
        getAnswers(props.question_id)

    }, [props.question_id, getAnswers]);


    useEffect(() => {
        if (answers) {
            setAnswerItems(answers.map(answer => {
                return <AnswerItem answer_id={answer.answer_id} answer_text={answer.answer_text}
                                   onClick={(event) => {
                                       props.answerChoiceHandler(answer.answer_id);
                                       console.log(answer.answer_id);
                                   }}
                                   chosen={answer.answer_id === +props.chosenAnswerId}
                />
            }))
        } else {
            setAnswerItems(null);
        }
    }, [answers, props.chosenAnswerId, props.answerChoiceHandler]);

    return (
        <div>
            {isFetching||props.isChosenFetching ? <Preloader/> : answerItems}
        </div>
    );
};

Answers = styled(Answers)`

`;

export default Answers;