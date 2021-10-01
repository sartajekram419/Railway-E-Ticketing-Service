import styled from "styled-components";
import { FaTimes} from "react-icons/fa";
import { NavLink as Link } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #292626;
    align-items: center;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    display: ${({ isSidebarOpen }) => (isSidebarOpen ? 'flex' : 'none')};
    top: ${({ isSidebarOpen }) => ( isSidebarOpen ? '0': '-100')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    align-items: center;
    justify-content: center;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }

`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &: hover {
        color: #0099ff;
        transition: 0.2s ease-in-out;
    }
`;
