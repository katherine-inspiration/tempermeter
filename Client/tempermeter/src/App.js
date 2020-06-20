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

function App() {

    return (
        <div>
            <Header>
                <HeaderLogo src="images/Tempermeter-logo.svg" alt={"Tempermeter logo"}/>
                <FAIcon icon = {faInfoCircle}  />

            </Header>
            <Main>
                <Switch>
                    <Route path={"/home"} render = {() => <HomeContainer/>} />
                    <Route path={"/test/:question_id"} render={() => <TestContainer /> } />
                </Switch>
            </Main>
        </div>

    );
}
export default App;
