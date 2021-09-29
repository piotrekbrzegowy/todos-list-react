import React from "react"
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { Wrapper, Button } from "../Buttons/styled";

const DownloadButton = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </Wrapper>
    )
};

export default DownloadButton;