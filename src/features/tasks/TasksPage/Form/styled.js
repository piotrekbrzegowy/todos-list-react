import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width:767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: hsl(180, 100%, 25%);
    color: white;
    border: none;
    transition: 0.5s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.05);
    }
`;