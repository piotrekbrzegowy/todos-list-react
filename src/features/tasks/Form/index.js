import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

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