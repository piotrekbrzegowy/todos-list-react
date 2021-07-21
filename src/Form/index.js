import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addnewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addnewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                required
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;