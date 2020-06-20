import styled from "styled-components";

const Paragraph = styled.p`
    border: 1px ${props => props.secondary? '#FD759C': '#2E753E'} solid;
    background-color: ${props => props.primary?'#2E753E':'white'};
    color: ${props => props.primary?'white':'#4d4d4d'};
    font-size: 18px;
    border-radius: 15px;
    padding: 20px;
    
`;

export default Paragraph;