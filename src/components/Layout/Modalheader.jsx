import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Modalheader({ title, onClose }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">{title}</Typography>
      <IconButton size="small" onClick={onclose}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

export default Modalheader;
