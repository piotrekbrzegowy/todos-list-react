import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Wrapper, Button } from "../Buttons/styled";

const DownloadButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Wrapper>
            <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
                {
                    loading ? "Ładowanie..." : "Pobierz przykładowe zadania"
                }
            </Button>
        </Wrapper>
    )
};

export default DownloadButton;