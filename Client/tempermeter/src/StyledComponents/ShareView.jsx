import React, {useEffect, useState} from 'react';
import {getPostMediatopicURL} from "../Functions/okapi";
import Paragraph from "./Paragraph";

const ShareView = (props) => {

    const [shareURL, setShareURL] = useState("");

    useEffect(() => {
        let url = getPostMediatopicURL({text: props.mediatopicText}, props.sessionKey, props.sessionSecretKey,
            props.sig, props.webServer);
        setShareURL(url);
    }, [props.mediatopicText, props.sessionSecretKey, props.sessionKey]);

    return(
        <div>
            <Paragraph primary>
                <iframe src = {shareURL}
                        width={"500px"}
                        height={"400px"}
                        style={{
                            border: "1px blue dashed",
                            marginTop: "20px"
                        }}>
                    Can't show share iframe
                </iframe>
            </Paragraph>
        </div>
    );
};

export default ShareView;