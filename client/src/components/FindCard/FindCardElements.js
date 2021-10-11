import styled from 'styled-components'


export const Container = styled.div`

    background-color: rgba(41,38,38,.85);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 30px 0px;
    margin: auto;
    width: 90%;
    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const SpaceContainer = styled.div`

    display: flex;
    align-items: center;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 5%;
`;

export const InputContainerLeft = styled.div`

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 42.5%;
`;

export const InputContainerRight = styled.div`

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 42.5%;
`;

export const Select = styled.select`
    width: 100%;
    padding: 9px 0px 9px 0px;
    font-size: 16px;
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
        padding: 100px 0px 0px 0px;
    }
`;


export const Button = styled.button`
    background: #102f63;
    color: white;
    width: 90%;
    height: 40px;
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #102f63;

`;
