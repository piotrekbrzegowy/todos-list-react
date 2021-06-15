import { useState } from "react";
import "./style.css"

const Form = ({ addnewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addnewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                required
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;