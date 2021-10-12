import styled from 'styled-components'


export const Container = styled.div`
   
    background: tranparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0px 0px 0px;
    flex-direction: column;
    margin: auto;
    width: 100%;
    @media (max-width: 768px)
        width: 100%;
    }
`;

export const Table = styled.table`
    box-shadow: 4.5px 5px #a4b0af;
    border-radius:10px 10px 10px 10px;
    border: 2px solid transparent;
    width: 90%;
    background: #b0fff4;
    padding: 0px 0px 0px 0px;
    border-collapse: collapse;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Button = styled.button`
box-shadow: 4.5px 5px #a4b0af;
    background: #102f63;
    color: white;
    width: 90%;
    height: 40px;
    margin-top: 15px;
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #102f63;

`;



