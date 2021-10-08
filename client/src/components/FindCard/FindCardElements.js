import styled from 'styled-components'


export const Container = styled.div`

    background-color: rgba(255,255,255,.5);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 30px 0px;
    margin: auto;
    width: 80%;
    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const SpaceContainer = styled.div`

    display: flex;
    align-items: center;
    //padding: 30px 0px 30px 0px;
    margin: auto;
    width: 10%;
`;

export const InputContainerLeft = styled.div`

    display: flex;
    align-items: center;
    justify-content: end;
    //padding: 30px 0px 30px 0px;
    margin: auto;
    width: 35%;
`;

export const InputContainerRight = styled.div`

    display: flex;
    align-items: center;
    justify-content: start;
    //padding: 30px 0px 30px 0px;
    margin: auto;
    width: 35%;
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


