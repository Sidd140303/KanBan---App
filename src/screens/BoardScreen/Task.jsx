import { Stack, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Draggable } from "react-beautiful-dnd";

function Task({ id, text, removeTask, index, onClick }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Stack
          {...(!!onClick ? { onClick: onClick } : {})}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <Typography
            p={1}
            border="1px solid"
            borderColor="#777980"
            bgcolor="#45474E"
            width="100%"
          >
            {text}
          </Typography>
          <IconButton onClick={removeTask}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      )}
    </Draggable>
  );
}

export default Task;
