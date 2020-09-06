import React, {useEffect, useState, useCallback} from "react";
import Question from "./Question";
import Button from "../StyledComponents/Button";
import Preloader from "../StyledComponents/Preloader";
import Answers from "../StyledComponents/Answers";
import Pages from "../StyledComponents/Pages";

const Test = (props) => {


        let [questions, setQuestions] = useState([]);
        let [isFetching, setFetching] = useState(false);
        let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        let [chosenAnswerId, setChosenAnswerId] = useState(null);
        let [isPrevButtonDisabled, setPrevButtonDisabled] = useState(false);
        let [isChosenAnswerFetching, setChosenAnswerFetching] = useState(false);

        const isTheLastQuestion = () => {
            return currentQuestionIndex === questions.length - 1;
        };


        const getChosenAnswer = (question_id) => {
            setChosenAnswerFetching(true);
            console.log("Trying to fetch chosen answers. Session id :" + props.sessionId +
                ', chosen answer id: ' + chosenAnswerId +
                'question id: ' + question_id
            );
            if (+props.sessionId && !chosenAnswerId) {
                console.log("Fetching chosen answer");
                return fetch('/api/history/answers/' + props.sessionId + '/' + question_id)
                    .then(response => response.json())
                    .then(result => {
                        console.log("Got the chosen answer from history");
                        console.log(result);
                        if (result.length > 0) {
                            setChosenAnswerId(result[0].answer_id);
                        }
                        setChosenAnswerFetching(false);
                        return result;
                    })
                    .catch(err => {
                        console.log('Couldn\'t get the chosen answer from the server');
                        console.log(err);
                    });
            }
        };

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

        const handleAnswerChoice = useCallback((answer_id) => {
            setChosenAnswerId(answer_id);
        }, []);

        const putAnswer = (data) => {
            console.log('client put body');
            console.log(JSON.stringify(data));
            fetch('/api/answer',
                {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    return result;
                })
                .catch(err => console.log(err));
        };


        const nextQuestionHandler = () => {
            if (questions){
                if (chosenAnswerId) {
                    putAnswer({
                        session_id: props.session_id,
                        answer_id: chosenAnswerId,
                        question_id: questions[currentQuestionIndex].question_id
                    });
                }
                if (currentQuestionIndex < questions.length - 1) {

                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setChosenAnswerId(null);
                }
                else{
                    finishTestHandler();
                }
            }


        };
        const prevQuestionHandler = () => {
            if (questions)
                if (currentQuestionIndex > 0) {
                    if (chosenAnswerId) {
                        putAnswer({
                            session_id: props.session_id,
                            answer_id: chosenAnswerId,
                            question_id: questions[currentQuestionIndex].question_id
                        });
                    }
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                    setChosenAnswerId(null);
                }
        };

        const finishTestHandler = () => {

            props.showFinishConfirmation(true);
        };

        useEffect(() => {
            props.setSessionId(props.session_id);
        }, [props.session_id]);

        useEffect(() => {
            setPrevButtonDisabled(currentQuestionIndex === 0);
        }, [currentQuestionIndex]);

        useEffect(() => {
            getSessionId();
            getQuestions();
        }, [props]);


        useEffect(() => {
            if (questions.length > 0 && currentQuestionIndex !== undefined) {
                console.log('Getting chosen answer');
                console.log(questions);
                console.log(currentQuestionIndex);
                getChosenAnswer(questions[currentQuestionIndex].question_id);
            }

        }, [props.sessionId, currentQuestionIndex, questions]);

        let questionItems = questions.map(question => <Question primary session_id={props.session_id}
                                                                question_id={question.question_id}
                                                                question_text={question.question_text}
                                                                questions_picture={question.question_picture}/>);

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
                         chosenAnswerId={chosenAnswerId} isChosenFetching={isChosenAnswerFetching}  />
                {isFetching ? null :
                    <div>
                        <Button onClick={prevQuestionHandler} disabled={isPrevButtonDisabled}>
                            Назад
                        </Button>
                        <Button primary={isTheLastQuestion()}
                                onClick={nextQuestionHandler}>
                            {currentQuestionIndex === questions.length - 1 ? 'Завершить тест' : 'Вперед'}
                        </Button>
                    </div>
                }
            </div>
        );
    }
;

export default Test;