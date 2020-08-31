import React, {useEffect} from 'react';
import {applicationID} from "../credentials";

const Auth = (props) => {

    useEffect(() => {
        let oauthURL = "https://connect.ok.ru/oauth/authorize?client_id=" + applicationID +
            "&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN&" +
            "response_type=token&redirect_uri=https://tempermeter-server.herokuapp.com";
        props.history.push(oauthURL);
    }, [props.history]);

    return <div></div>
};

export default Auth;