import React from "react";
import styled from "styled-components";

let Pages = (props) => {
    return <div className={props.className}>
        {props.currentPage}/{props.totalPages}
    </div>
};

Pages = styled(Pages)`
    padding: 15px;
    color: '#5e5e5e';
    font-style:italic;
    text-align: left;
`;

export default Pages;