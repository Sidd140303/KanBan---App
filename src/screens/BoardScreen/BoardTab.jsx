import React from "react";
import { Grid, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import Task from "./Task";

export default function BoardTab({ name, addTask, tasks }) {
  return (
    <>
      <Grid item xs={4}>
        <Stack p={3} bgcolor="#000">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight={400} variant="h6">
              {name}
            </Typography>
            <IconButton onClick={addTask}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Stack spacing={2} mt={3}>
            {tasks.map((task) => (
              <Task key={task.id} text={task.text} id={task.id} />
            ))}
          </Stack>
        </Stack>
      </Grid>
    </>
  );
}
