import { Grid } from "@mui/material";
import BoardTab from "./BoardTab";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";
import useApp from "../../hooks/useApp";

const statusMap = {
  todos: "Todos",
  inProgress: "In Progress",
  completed: "Completed",
};

function BoardInterface({ boardData, boardId }) {
  const [addTaskTo, setAddTaskTo] = useState("");
  const [tabs, setTabs] = useState(structuredClone(boardData));
  const { updateBoardData } = useApp();

  const handleAddTask = async (text) => {
    const dClone = structuredClone(tabs);
    dClone[addTaskTo].unshift({ text, id: crypto.randomUUID() });
    try {
      await updateBoardData(boardId, dClone);
      setTabs(dClone);
      setAddTaskTo("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!!addTaskTo && (
        <AddTaskModal
          tabname={statusMap[addTaskTo]}
          onClose={() => setAddTaskTo("")}
          addTask={handleAddTask}
        />
      )}
      <Grid container px={4} mt={2} spacing={2}>
        {Object.keys(statusMap).map((status) => (
          <BoardTab
            key={status}
            tasks={tabs[status]}
            name={statusMap[status]}
            addTask={() => setAddTaskTo(status)}
          />
        ))}
      </Grid>
    </>
  );
}

export default BoardInterface;
