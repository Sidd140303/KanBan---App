import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import CreateBoardModal from "./CreateBoardModal";
import NoBoards from "./NoBoards";
import { Stack, Grid, Typography, IconButton, Box } from "@mui/material";
import BoardCard from "./BoardCard";
import useApp from "../../hooks/useApp";

function BoardsScreen() {
  const [showModal, setShowModal] = useState(false);
  const { fetchBoards } = useApp();
  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards /> */}
      <Stack p={3} mt={5}>
        <Grid container columns={12} spacing={4}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </Grid>
      </Stack>
    </>
  );
}

export default BoardsScreen;
