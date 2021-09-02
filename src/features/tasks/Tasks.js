import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {

  const {
    removeTask,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addnewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />

    </Container>
  );
};

export default Tasks;