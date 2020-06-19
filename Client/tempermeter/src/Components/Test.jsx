import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Question from "./Question";
import Button from "../StyledComponents/Button";
import Preloader from "../StyledComponents/Preloader";

const Test = (props) => {

    let [isInitialized, setInitialized] = useState(false);
    let [sessionId, setSessionId] = useState(null);
    let [isLastQuestion, setIsLastQuestion] = useState(false);
    let [questions, setQuestions] = useState([]);
    let [isFetching, setFetching] = useState(false);
    const getSessionId = () => {
        console.log('/api/session/' + props.user_id);
        return fetch('/api/session/' + props.user_id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                props.updateSessionId(result.session_id);
                return result.session_id;
            })
            .catch(err => console.log(err));
    };

    const getQuestions = () => {
        setFetching(true);
        console.log('Getting questions');
        return fetch('/api/questions')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(result => {
                console.log('questions result');
                console.log(result);
                props.updateQuestions(result);
                setQuestions(result);
                setFetching(false);
                return result;
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        setSessionId(props.session_id);
    }, [props.session_id]);

    if (!isInitialized){
        getSessionId();
        getQuestions();
        setInitialized(true);
    }


    return (
        <div>
            {/*<Switch>
                <Route path={'/:question_id'} render={(p) => <Question session_id = {props.session_id} question_id={p.match.params.question_id} lastQuestionHandler={setIsLastQuestion} />}/>
            </Switch>*/}

            {isFetching ? <Preloader/> :
                questions.map(question => <Question session_id={props.session_id} question_id={question.question_id}
                                                    question_text={question.question_text}
                                                    questions_picture={question.question_picture}/>)}
            <Button>
                Назад
            </Button>
            <Button primary={isLastQuestion ? true : false}>
                {isLastQuestion ? 'Завершить тест' : 'Вперед'}
            </Button>
        </div>
    );
};

export default Test;