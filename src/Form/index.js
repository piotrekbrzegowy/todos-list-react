import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addnewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addnewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                required
                ref={inputRef}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;