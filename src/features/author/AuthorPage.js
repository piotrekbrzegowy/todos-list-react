import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Cześć!"
            body={
                <>Wejdź na mój LinkedIn i dowiedz się o mnie trochę więcej: <a href="https://www.linkedin.com/in/piotrekbrzegowy/" target="_blank">LinkedIn</a></>
            }
        />
    </Container>
);