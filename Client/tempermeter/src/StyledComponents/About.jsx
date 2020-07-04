import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

let About = (props) => {
    return (
        <div {...props}>
            <Paragraph className={'info'}>
                Известно, что все люди по разному реагируют на события и испытывают разные эмоции при одних и тех же
                событиях.
                <br/>В наших генах записано множество информации. В том числе, там записаны особенности работы нервной системы.
                <br/>В зависимости от свойств нервной системы, присущих человеку, можно говорить о том, каким темпераментом
                он обладает.
                <br/>
                <br/>Данный тест поможет вам определить свой личный темперамент.
                <br/>
                <br/><i>Приложение создано в качестве индивидуального домашнего задания по курсу Системы Управления Контентом.
                <br/>Матмех, СПбГУ, 2020 год.</i>
                <br/>
                <br/>По всем вопросам можете писать на <b>почту</b> katherine.inspiration@gmail.com
            </Paragraph>
        </div>
    );
};

About = styled(About)`
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.81);
    position: fixed;
    .info{
        padding: 30px;
        margin: 110px auto;
        width: 800px;
    }
    
`;

export default About;