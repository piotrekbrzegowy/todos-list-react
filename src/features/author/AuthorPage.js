import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Cześć wszystkim!"
            body={
                <>Lista zadań została zrealizowana w ramach mojego kursu w youcode. - Piotrek Brzegowy</>
            }
        />
    </Container>
);