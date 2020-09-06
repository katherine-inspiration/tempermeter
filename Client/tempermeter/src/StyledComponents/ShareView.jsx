import React, {useEffect, useState} from 'react';
import {getPostMediatopicURL} from "../Functions/okapi";
import Paragraph from "./Paragraph";
import Button from "./Button";

const ShareView = (props) => {

    const [shareURL, setShareURL] = useState("");

    useEffect(() => {
        let url = getPostMediatopicURL({text: props.mediatopicText}, props.sessionKey, props.sessionSecretKey,
            props.sig, props.webServer);
        setShareURL(url);
    }, [props.mediatopicText, props.sessionSecretKey, props.sessionKey]);

    return (
        <div>
            <Paragraph secondary style={{textAlign: "center"}}>
                <div style={{marginBottom: "20px"}}>

                    {props.mediatopicText}
                </div>
                <Button secondary bold onClick={() => {
                    fetch(shareURL)
                        .then(() => {
                            alert("Запись успешно опубликована");
                            props.hideViewHandler();
                        })
                        .catch(err => {
                            alert("Ошибка при публикации");
                            console.log(err);
                        });
                }}>
                    Опубликовать
                </Button>
            </Paragraph>
        </div>
    );
};

export default ShareView;