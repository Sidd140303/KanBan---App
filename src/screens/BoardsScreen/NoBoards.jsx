import React from "react";
import { Stack, Typography } from "@mui/material";

function NoBoards() {
  return (
    <Stack textAlign="center" mt={15} spacing={1}>
      <Typography variant="h5">No boards created</Typography>
      <Typography color="rgba(255, 255, 255, 0.7)">
        Create your first board
      </Typography>
    </Stack>
  );
}

export default NoBoards;
