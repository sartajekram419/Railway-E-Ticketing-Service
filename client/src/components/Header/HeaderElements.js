import styled from 'styled-components'


export const Container = styled.div`
    background-image: url("headerBackground.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    padding: 120px 0px 40px 0px;
    justify-content: space-between;
    flex-direction: row;
    margin: auto;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TextBox = styled.div`
    justify-content: center;
    width: 40%;
    align-items: center;
    text-align: center;
    padding: 0px 5px 0px 5px;
    color: #fff;
    @media (max-width: 768px) {
        width: 60%;
    }
`;

export const FindCardBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
        padding: 40px 0px 0px 0px;
    }
`;