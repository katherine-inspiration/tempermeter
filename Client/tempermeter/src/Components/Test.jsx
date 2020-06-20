import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Question from "./Question";
import Button from "../StyledComponents/Button";
import Preloader from "../StyledComponents/Preloader";
import Answers from "../StyledComponents/Answers";

const Test = (props) => {

    let [isInitialized, setInitialized] = useState(false);
    let [sessionId, setSessionId] = useState(null);
    let [isLastQuestion, setIsLastQuestion] = useState(false);
    let [questions, setQuestions] = useState([]);
    let [isFetching, setFetching] = useState(false);
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


    const getSessionId = () => {
        setFetching(true);
        console.log('/api/session/' + props.user_id);
        return fetch('/api/session/' + props.user_id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result)
                    props.updateSessionId(result.session_id);
                setFetching(false);
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
                if (result){
                    props.updateQuestions(result);
                    setQuestions(result);
                }
                setFetching(false);
                return result;
            })
            .catch(err => console.log(err));
    };


    const nextQuestionHandler = () => {
        if (questions)
            if (currentQuestionIndex < questions.length - 1){
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
    }
    const prevQuestionHandler = () => {
        if (questions)
            if (currentQuestionIndex > 0){
                setCurrentQuestionIndex(currentQuestionIndex - 1);
            }
    }

    useEffect(() => {
        setSessionId(props.session_id);
    }, [props.session_id]);

    if (!isInitialized) {
        getSessionId();
        getQuestions();
        setInitialized(true);
    }

    let questionItems = questions.map(question => <Question primary session_id={props.session_id} question_id={question.question_id}
                                                            question_text={question.question_text}
                                                            questions_picture={question.question_picture}/>)

    return (
        <div>
            {/*<Switch>
                <Route path={'/:question_id'} render={(p) => <Question session_id = {props.session_id} question_id={p.match.params.question_id} lastQuestionHandler={setIsLastQuestion} />}/>
            </Switch>*/}

            {isFetching ? <Preloader/> : questionItems[currentQuestionIndex]}
            <Answers question_id={questions.length>0?questions[currentQuestionIndex].question_id:""} />
            {isFetching ? null:
                <div>
                    <Button onClick={prevQuestionHandler} >
                        Назад
                    </Button>
                    <Button primary={currentQuestionIndex === questions.length - 1 ? true : false} onClick={nextQuestionHandler} >
                        {currentQuestionIndex === questions.length - 1  ? 'Завершить тест' : 'Вперед'}
                    </Button>
                </div>
            }
        </div>
    );
};

export default Test;