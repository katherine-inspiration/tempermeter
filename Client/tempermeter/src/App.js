import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./StyledComponents/Header";
import HeaderLogo from "./StyledComponents/HeaderLogo";
import FAIcon from "./StyledComponents/FAIcon";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import Main from "./StyledComponents/Main";
import {Route, Switch, useHistory} from "react-router-dom";
import HomeContainer from "./ContainerComponents/HomeContainer";
import TestContainer from "./ContainerComponents/TestContainer";
import FinishConfirmWindow from "./StyledComponents/FinishComfirmWindow";
import Result from "./StyledComponents/Result";
import store from "./redux/store";
import About from "./StyledComponents/About";
import Auth from "./Components/Auth";
import Preloader from "./StyledComponents/Preloader";

function App(props) {

    const [isFinishConfirmationShown, setFinishConfirmationShown] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [isAboutShowed, showAbout] = useState(false);
    const [authInfo, setAuthInfo] = useState("");
    const [userInfo, setUserInfo] = useState(null);


    const [sessionInfo, setSessionInfo] = useState(null);

    const history = useHistory();

    useEffect(() => {

        let hashParams = window.location.hash.substring(1);
        hashParams = hashParams.split("&").reduce((params, current) => {
            let currentParam = current.split("=");
            return {
                ...params,
                [currentParam[0]]: currentParam[1]
            };
        }, {});
        console.log(hashParams);
        setAuthInfo(hashParams);
    }, []);

    useEffect(() => {
        console.log("Search params");
        let sessionInfo = history.location.search;
        console.log(sessionInfo);
        sessionInfo = sessionInfo.substring(1, sessionInfo.length);
        sessionInfo = sessionInfo.split("&").reduce((accum, current) => {
            let pair = current.split("=");
            return {
                ...accum,
                [pair[0]]: pair[1]
            };
        }, {});
        setSessionInfo(sessionInfo);
        console.log("Parsed session info");
        console.log(sessionInfo);

    }, [props]);


    return (
        <div style={{height: "500px", overflowY: "scroll"}} onClick={() => {
            if (isAboutShowed) {
                showAbout(false);
            }
        }}>

            {isFinishConfirmationShown ? <FinishConfirmWindow showFinishConfirmation={setFinishConfirmationShown}
                                                              sessionId={sessionId}
                                                              userId={sessionInfo.logged_user_id}

            /> : null}
            {isAboutShowed ? <About/> : null}
            <Header>
                <HeaderLogo src="images/Tempermeter-logo.svg" alt={"Tempermeter logo"}/>
                <FAIcon icon={faInfoCircle} onClick={() => {
                    showAbout(true);
                }}/>

            </Header>
            <Main>
                {sessionInfo ?
                    <Switch>
                        <Route exact path={"/"}
                               render={() => <HomeContainer user_id={sessionInfo.logged_user_id} history={history}/>}/>
                        <Route path={"/auth"} render={() => <Auth history={history}/>}/>
                        <Route exact path={"/test/"} render={() => <TestContainer
                            history={history}
                            showFinishConfirmation={setFinishConfirmationShown}
                            setSessionId={setSessionId}
                            sessionId={sessionId}
                            user_id={sessionInfo.logged_user_id}
                        />}/>
                        <Route exact path={'/result/:session_id'}
                               render={(p) => <Result sessionId={p.match.params.session_id}
                                                      sessionKey={sessionInfo.session_key}
                                                      sessionSecretKey={sessionInfo.session_secret_key}
                                                      history={history}
                                                      sig={sessionInfo.sig}
                                                      user_id={sessionInfo.logged_user_id}
                                                      webServer={sessionInfo.web_server}/>}/>
                        <Route render={() => <div>The page isn't found</div>}/>
                    </Switch>
                    : <Preloader/>
                }
            </Main>
        </div>

    );
}

export default App;
