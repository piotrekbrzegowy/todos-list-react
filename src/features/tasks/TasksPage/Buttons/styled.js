import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    margin: 0 20px 0 0;
    display: flex;
    justify-content: right;
    gap: 20px;

    @media(max-width:767px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 20px 20px 20px;
    }
`;

export const Button = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    transition: 0.5s;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    ${({ disabled }) => disabled && css`
        color: #ccc;
        cursor: not-allowed;
    `}
`;