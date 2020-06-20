import styled from "styled-components";
import Header from "./Header";
import React from "react";

const LoaderImg = (props) => {
    return (
        <div>
            <img className={props.className} {...props} src="/images/preloader.svg"/>
        </div>
    );
};

const Preloader = styled(LoaderImg)`
    width: 150px;
    display: inline-block;
    
`;

export default Preloader;