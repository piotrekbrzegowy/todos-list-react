import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: break-word;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `} 
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;

    ${({toggleDone}) => toggleDone && css`
        background-color: hsl(120, 61%, 34%);
        transition: 0.5s;

        &:hover {
            background-color: hsl(120, 61%, 39%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: hsl(348, 83%, 47%);
        transition: 0.5s;

        &:hover {
            background-color: hsl(348, 83%, 52%);
        }
    `}
`;