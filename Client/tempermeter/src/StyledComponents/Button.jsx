import styled from "styled-components";

const Button = styled.button`
    padding: 18px 60px;
    background-color: ${props => props.disabled ? '#a3a3a3' : props.primary ? '#2E753E' : props.secondary ? '#FD759C' : 'white'};
    color: ${props => props.disabled ? 'black' : props.primary || props.secondary ? 'white' : '#2E753E'};
    border: 1px ${props => props.disabled ? 'black' : props.secondary ? '#FD759C' : '#2E753E'} solid;
    display: inline-block;
    font-size:20px;
    text-decoration: none;
    :hover{
        cursor:pointer;
    }
    :active{
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    }
`;

export default Button;