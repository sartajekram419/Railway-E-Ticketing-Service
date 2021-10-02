import styled from 'styled-components'


export const Container = styled.div`
   
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    padding: 120px 0px 40px 0px;
    flex-direction: column;
    margin: auto;
    width: 80%;
    @media (max-width: 768px) {
        width: 95%;
    }
`;



export const Heading = styled.div`
    background: #102f63;
    align-items: center;
    border-radius:7px 7px 0px 0px;
    border: 5px solid #102f63;
    justify-content: center;
    padding: 10px 0px 10px 0px;
    margin: auto;
    width: 100%;
`;

export const Table = styled.table`
    width: 100%;
    background: #fff;
    border-collapse: collapse;
    @media (max-width: 768px) {
        width: 100%;
    }
`;


