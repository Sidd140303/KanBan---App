import React, { useState } from "react";
import {
  Dialog,
  Typography,
  Stack,
  IconButton,
  Chip,
  OutlinedInput,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Modalheader from "../../components/Layout/Modalheader";

function AddTaskModal({ tabname, onClose, addTask }) {
  const [text, setText] = useState("");
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="xs">
      <Stack mt={3} p={2}>
        <Stack
          mb={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <Typography variant="h6">Add Task</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton> */}
        </Stack>
        <Modalheader title="Add Task" onClose={onClose} />
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography>Status : </Typography>
            <Chip size="small" label={tabname} />
          </Stack>
          <OutlinedInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="task"
          />
          <Button
            // disabled={loading}
            onClick={() => addTask(text)}
            variant="contained"
          >
            Add Task
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default AddTaskModal;
