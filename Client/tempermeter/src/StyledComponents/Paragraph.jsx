import styled from "styled-components";

const Paragraph = styled.p`
    border: 1px ${props => props.primary? '#2E753E': '#FD759C'} solid;
    background-color: white;
    color: '#4d4d4d';
    font-size: 18px;
    border-radius: 15px;
    padding: 20px;
    
`;

export default Paragraph;