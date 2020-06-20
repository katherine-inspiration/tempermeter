import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Question from "./Question";
import Button from "../StyledComponents/Button";
import Preloader from "../StyledComponents/Preloader";
import Answers from "../StyledComponents/Answers";
import Pages from "../StyledComponents/Pages";

const Test = (props) => {

    let [sessionId, setSessionId] = useState(null);
    let [isLastQuestion, setIsLastQuestion] = useState(false);
    let [questions, setQuestions] = useState([]);
    let [isFetching, setFetching] = useState(false);
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    let [chosenAnswerId, setChosenAnswerId] = useState(null);
    let [isPrevButtonDisabled, setPrevButtonDisabled] = useState(false);


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
                if (result) {
                    props.updateQuestions(result);
                    setQuestions(result);
                }
                setFetching(false);
                return result;
            })
            .catch(err => console.log(err));
    };

    const handleAnswerChoice = (answer_id) => {
        setChosenAnswerId(answer_id);
    }


    const nextQuestionHandler = () => {
        if (questions)
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                console.log('currentQuestionIndex')
                console.log(currentQuestionIndex);
                setChosenAnswerId(null);
            }
    };
    const prevQuestionHandler = () => {
        if (questions)
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                console.log('currentQuestionIndex')
                console.log(currentQuestionIndex);
                setChosenAnswerId(null);
            }
    };

    useEffect(() => {
        setSessionId(props.session_id);
    }, [props.session_id]);

    useEffect(() => {
        setPrevButtonDisabled(currentQuestionIndex === 0);
    }, [currentQuestionIndex]);

    useEffect(() => {
        getSessionId();
        getQuestions();
    }, [props]);


    let questionItems = questions.map(question => <Question primary session_id={props.session_id}
                                                            question_id={question.question_id}
                                                            question_text={question.question_text}
                                                            questions_picture={question.question_picture}/>)

    return (
        <div>
            {/*<Switch>
                <Route path={'/:question_id'} render={(p) => <Question session_id = {props.session_id} question_id={p.match.params.question_id} lastQuestionHandler={setIsLastQuestion} />}/>
            </Switch>*/}

            {isFetching ? <Preloader/> :
                <div>
                    <Pages currentPage={currentQuestionIndex + 1} totalPages={questions.length}/>
                    {questionItems[currentQuestionIndex]}
                </div>}
            <Answers question_id={questions.length > 0 ? questions[currentQuestionIndex].question_id : ""}
                     answerChoiceHandler={handleAnswerChoice}
                     chosenAnswerId={chosenAnswerId}/>
            {isFetching ? null :
                <div>
                    <Button onClick={prevQuestionHandler} disabled={isPrevButtonDisabled} >
                        Назад
                    </Button>
                    <Button primary={currentQuestionIndex === questions.length - 1}
                            onClick={nextQuestionHandler}>
                        {currentQuestionIndex === questions.length - 1 ? 'Завершить тест' : 'Вперед'}
                    </Button>
                </div>
            }
        </div>
    );
};

export default Test;