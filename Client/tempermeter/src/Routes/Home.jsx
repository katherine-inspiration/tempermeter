import React from "react";
import Button from "../Components/Button";
import Title from "../Components/Title";

const Home = (props) => {
    return (
        <div>
            <Button primary>
                Пройти тест
            </Button>
            <Title secondary>
                История
            </Title>
        </div>
    );
};

export default Home;