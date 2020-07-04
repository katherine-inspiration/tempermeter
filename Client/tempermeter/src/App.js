import React, {useState} from 'react';
import './App.css';
import Header from "./StyledComponents/Header";
import HeaderLogo from "./StyledComponents/HeaderLogo";
import FAIcon from "./StyledComponents/FAIcon";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import Main from "./StyledComponents/Main";
import {Route, Switch} from "react-router-dom";
import HomeContainer from "./ContainerComponents/HomeContainer";
import TestContainer from "./ContainerComponents/TestContainer";
import Preloader from "./StyledComponents/Preloader";
import FullScreenLogo from "./StyledComponents/FullScreenLogo";
import FinishConfirmWindow from "./StyledComponents/FinishComfirmWindow";
import Result from "./StyledComponents/Result";
import store from "./redux/store";
import About from "./StyledComponents/About";

function App(props) {

    const [isFinishConfirmationShown, setFinishConfirmationShown] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [isAboutShowed, showAbout] = useState(false);


    return (
        <div onClick={() => {
            if (isAboutShowed){
                showAbout(false);
            }
        }}>

            {isFinishConfirmationShown ? <FinishConfirmWindow showFinishConfirmation={setFinishConfirmationShown}
                                                              sessionId={sessionId}
                                                              userId={store.getState().userInfo.user_id}

            /> : null}
            {isAboutShowed? <About />:null}
            <Header>
                <HeaderLogo src="images/Tempermeter-logo.svg" alt={"Tempermeter logo"}/>
                <FAIcon icon={faInfoCircle} onClick={() => {showAbout(true);}} />

            </Header>
            <Main>
                <Switch>
                    <Route exact path={"/"} render={() => <HomeContainer/>}/>
                    <Route exact path={"/test/"} render={() => <TestContainer
                        showFinishConfirmation={setFinishConfirmationShown}
                        setSessionId={setSessionId}
                        sessionId={sessionId}
                    />}/>
                    <Route exact path={'/result/:session_id'} render={(p) => <Result sessionId={p.match.params.session_id} />} />
                    <Route render={() => <div>The page isn't found</div>} />
                </Switch>
            </Main>
        </div>

    );
}

export default App;
