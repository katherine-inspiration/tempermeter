import React, {useState} from "react";
import styled from "styled-components";
import Preloader from "./Preloader";
import Paragraph from "./Paragraph";

let Result = (props) => {
    let [isFetching, setFetching] = useState(false);

    return (
        <div>
            {isFetching?<Preloader/>:
                <div>
                    <Paragraph>
                        Some result
                    </Paragraph>
                </div>}
        </div>
    );
};

Result = styled(Result)`

`;

export default Result;