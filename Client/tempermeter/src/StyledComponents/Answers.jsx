import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AnswerItem from "./AnswerItem";
import Preloader from "./Preloader";

let Answers = (props) => {
    let [answers, setAnswers] = useState([]);
    let [isFetching, setFetching] = useState(true);
    let [answerItems, setAnswerItems] = useState(null);

    useEffect(() => {getAnswers(props.question_id)}, [props.question_id]);
    useEffect(() => {
        if( answers){
            setAnswerItems(answers.map(answer => {
                return <AnswerItem answer_id={answer.answer_id} answer_text={answer.answer_text}/>
            }))
        }
        else{
            setAnswerItems(null);
        }
    }, [answers]);

    const getAnswers = (question_id) => {
        console.log("props");
        console.log(props);
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
        }
        else{
            return [];
        }
    };

    return (
        <div>
            {isFetching ? <Preloader/> : answerItems}
        </div>
    );
};

Answers = styled(Answers)`

`;

export default Answers;