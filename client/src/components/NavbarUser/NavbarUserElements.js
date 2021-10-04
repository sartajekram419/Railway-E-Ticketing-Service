import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #292626;
    height: 80px;
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 20);
    z-index:10;
    position: fixed;
`;

export const Title = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

`;

export const NavLink = styled(Link)`
    color: #fff;
    
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    display: flex;

    &.active {
        color: #fff;
        border-bottom: 3px solid #fff;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        transform: translate(-50%, 50%);
        font-size: 2rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    white-space: nowrap;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

