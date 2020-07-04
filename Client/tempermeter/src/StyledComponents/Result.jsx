import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Preloader from "./Preloader";
import Paragraph from "./Paragraph";
import BackToHomeButton from "./BackToHomeButton";
import TemperImage from "./TemperImage";
import {useHistory} from "react-router-dom";

let Result = (props) => {
    const [isFetching, setFetching] = useState(true);
    const [resultData, setResultData] = useState([]);
    const [resultDataItems, setResultDataItems] = useState([]);
    const history = useHistory();


    const getResultNamesString = (result) => {
        let resultNames = "";
        console.log(result);
        if (result.length > 0) {
            resultNames += result[0].name;
            for (let i = 1; i < result.length; i++) {
                resultNames += " + " + result[i].name;
            }
        }
        return resultNames;
    };

    useEffect(() => {
        setFetching(true);
        console.log(props.sessionId);
        fetch('/api/result/' + props.sessionId)
            .then(response => {
                let result = response.json();
                console.log(result);
                return result;
            })
            .then(result => {
                console.log("Got Result Data");
                console.log(result);
                setResultData(result);
                setFetching(false);
                return result;
            })
            .then(result => {
                if (result) {
                    setResultDataItems(result.map(result => {
                        return (
                            <>
                                <div>
                                    <b>{result.name}</b>
                                </div>
                                <TemperImage src={result.picture}/>
                                <Paragraph align={'left'} >
                                    {result.text}
                                </Paragraph>
                            </>
                        );
                    }));
                    return result;
                }
            })
            .catch(err => {
                console.log("Couldn't fetch the result data");
                console.log(err);
            })
    }, [props]);

    useEffect(() => {
        if (resultData){
            setFetching(false);
        }
    }, [resultData]);


return (
    <div>
        <BackToHomeButton primary onClick={() =>
            history.push("/")
        } >
            Вернуться на главную
        </BackToHomeButton>
        {isFetching || resultDataItems.length === 0 ? <Preloader/> :
            <div>
                <Paragraph>`
                    Вы - {getResultNamesString(resultData)}
                    <br/>
                    {resultDataItems}
                </Paragraph>
            </div>}
    </div>
);
}
;

Result = styled(Result)`

`;

export default Result;