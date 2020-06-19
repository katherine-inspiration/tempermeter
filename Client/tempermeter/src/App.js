import React from 'react';
import './App.css';
import Header from "./Components/Header";
import HeaderLogo from "./Components/HeaderLogo";
import FAIcon from "./Components/FAIcon";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import Main from "./Components/Main";
import { Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";

function App() {

    return (
        <div>
            <Header>
                <HeaderLogo src="images/Tempermeter-logo.svg" alt={"Tempermeter logo"}/>
                <FAIcon icon = {faInfoCircle}  />
            </Header>
            <Main>
                <Switch>
                    <Route path={"/home"} render = {() => <Home/>} />
                </Switch>
            </Main>
        </div>

    );
}

export default App;
