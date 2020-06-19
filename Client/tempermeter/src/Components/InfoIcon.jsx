import styled from "styled-components";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InfoIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #2E753E;
    position: absolute;
    top: 30px;
    right: 40px;
    
    :hover{
        cursor: pointer;
    }
`;

export default InfoIcon;