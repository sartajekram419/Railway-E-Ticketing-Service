import styled from 'styled-components'

export const Button = styled.button`
    background: ${({ seatStatus }) => (seatStatus ? 'green' : 'red')};
    color: white;
    width: 90%;
    height: 40px;
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #102f63;

`;