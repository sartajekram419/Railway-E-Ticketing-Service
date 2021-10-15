import styled from 'styled-components'


export const Container1 = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 130px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;

    border-radius:10px 10px 10px 10px;
    border: 2px solid #a4b0af;

    flex-direction: column;
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const UserInfoContainer = styled.div`
    background: #fff;
    display: flex;
    align-items: flex-start;
    margin: auto;
    padding: 10px 0px 45px 0px;
    border-radius:0px 0px 7px 7px;
    border: 2px solid transparent;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const InfoDiv = styled.div`
    width: 40%;
    padding: 30px 50px 0px 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 30px 0px 0px 0px;
        width: 80%;
    }
`;

export const Select = styled.select`
    width: 45%;
    padding: 9px 0px 9px 0px;
    font-size: 16px;
    @media (max-width: 768px) {
        width: 60%;
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


export const Button = styled.button`
    background: #102f63;
    color: white;
    font-size: 20px;
    margin-top: 40px; 
    padding: 10px 10px 10px 10px;
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #102f63;
    display: ${({ passengerMail }) => (passengerMail=="" ? 'none' : 'flex')};
`;

export const Container2 = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 45px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    padding: 0px 0px 30px 0px;

    border-radius:10px 10px 10px 10px;
    border: 2px solid #a4b0af;

    flex-direction: column;
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const Container3 = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    padding: 30px 0px 30px 0px;

    border-radius:10px 10px 10px 10px;
    border: 2px solid #a4b0af;

    flex-direction: row;
    width: 60%;
    @media (max-width: 768px) {
        width: 90%;
    }
`;
