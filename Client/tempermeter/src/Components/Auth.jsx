import React, {useEffect} from 'react';
import {applicationID} from "../credentials";
import {Redirect} from 'react-router-dom';

const oauthURL = "https://connect.ok.ru/oauth/authorize?client_id=" + applicationID +
    "&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN;PUBLISH_TO_STREAM&" +
    "response_type=token&redirect_uri=https://tempermeter-server.herokuapp.com";

const Auth = (props) => {

    // useEffect(() => {
    //     let oauthURL = "https://connect.ok.ru/oauth/authorize?client_id=" + applicationID +
    //         "&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN;PUBLISH_TO_STREAM&" +
    //         "response_type=token&redirect_uri=https://tempermeter-server.herokuapp.com";
    //     props.history.push(oauthURL);
    // }, [props.history]);

    return <Redirect to={oauthURL}/>
};

export default Auth;