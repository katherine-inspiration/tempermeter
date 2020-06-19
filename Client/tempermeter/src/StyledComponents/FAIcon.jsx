import styled from "styled-components";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FAIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: ${props => props.secondary? '#FD759C': '#2E753E'};
    position: absolute;
    top: 30px;
    right: 40px;
    
    :hover{
        cursor: pointer;
    }
`;

export default FAIcon;