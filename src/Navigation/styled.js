import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;

    &.active{
        font-weight: bold;
    }

    &:hover{
        border-bottom: 1px solid;
    }
`;

export const List = styled.ul`
    background: teal;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    margin: 20px;
`;