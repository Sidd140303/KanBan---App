import { Snackbar } from "@mui/material";
import React from "react";
import usestore from "../../store";

function SnackBarManager() {
  const { toastrMsg, setToastr } = usestore();
  return (
    <Snackbar
      message={toastrMsg}
      open={!!toastrMsg}
      autoHideDuration={5000}
      onClose={() => setToastr("")}
    />
  );
}

export default SnackBarManager;
