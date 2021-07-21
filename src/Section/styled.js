import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    background-color: #fff;
    margin: 10px 0;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-bottom: 1px solid #ddd;

    @media(max-width:767px) {
        .section__header {
            grid-template-columns: 1fr;
        }
    };
`;

export const Heading = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;

    ${({ special }) => special && css`
        border-bottom: 1px solid #ddd;
    `}
`;

export const Body = styled.div`
    padding: 20px;
`;