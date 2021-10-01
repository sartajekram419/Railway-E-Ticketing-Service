import styled from 'styled-components'


export const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 0px 0px 0px;
    flex-direction: row;
    margin: auto;
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px 0px 50px 0px;
        align-items: center;
        justify-content: space-between;
    }
`;

export const LogoAndTextBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 32%;

    padding: 40px 0px 0px 0px;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
    }
`;

export const Logo = styled.div`
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    width: 20px;
    height: 20px;
    @media (max-width: 768px) {
        
    }
`;

export const TextBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0px 0px 40px 0px;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    width: 80%;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0px 0px 0px 0px;
    }
`;