import React from "react";
import Button from "../Components/Button";
import Title from "../Components/Title";
import ResultHistory from "../Components/ResultsHistory";

const Home = (props) => {
    return (
        <div>
            <Button primary>
                Пройти тест
            </Button>
            <Title secondary>
                История
            </Title>
            <ResultHistory/>
        </div>
    );
};

export default Home;