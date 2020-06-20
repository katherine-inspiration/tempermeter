import styled from "styled-components";
import React from "react";


const Logo = (props) => {
    return(
        <img className={props.className} src={'/images/Tempermeter_loader.svg'} />
    );
};

const FullScreenLogo = styled(Logo)`
    width:100%;
`;

export default FullScreenLogo;