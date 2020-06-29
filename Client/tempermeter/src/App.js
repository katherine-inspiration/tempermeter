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

function App() {

    let [isFinishConfirmationShown, setFinishConfirmationShown] = useState(false);
    let [sessionId, setSessionId] = useState(null);

    return (
        <div>

            {isFinishConfirmationShown ? <FinishConfirmWindow showFinishConfirmation={setFinishConfirmationShown}
                                                              sessionId={sessionId}
            /> : null}

            <Header>
                <HeaderLogo src="images/Tempermeter-logo.svg" alt={"Tempermeter logo"}/>
                <FAIcon icon={faInfoCircle}/>

            </Header>
            <Main>
                <Switch>
                    <Route path={"/home"} render={() => <HomeContainer/>}/>
                    <Route path={"/test/:question_id"} render={() => <TestContainer
                        showFinishConfirmation={setFinishConfirmationShown}
                        setSessionId={setSessionId}
                        sessionId={sessionId}
                    />}/>
                </Switch>
            </Main>
        </div>

    );
}

export default App;
