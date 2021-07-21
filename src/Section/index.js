import { Wrapper, Header, Heading, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Header>
            <Heading>{title}</Heading>
            {extraHeaderContent}
        </Header>
        <Body>{body}</Body>
    </Wrapper>
);

export default Section;