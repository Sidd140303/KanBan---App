import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import CreateBoardModal from "./CreateBoardModal";
import NoBoards from "./NoBoards";
import { Stack, Grid, Typography, IconButton, Box } from "@mui/material";
import BoardCard from "./BoardCard";
import useApp from "../../hooks/useApp";
import AppLoader from "../../components/Layout/AppLoader";
import usestore from "../../store";

function BoardsScreen() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { fetchBoards } = useApp();
  const { boards, areBoardsFetched } = usestore();
  useEffect(() => {
    if (!areBoardsFetched) fetchBoards(setLoading);
    else setLoading(false);
  }, []);
  if (loading) return <AppLoader />;
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards /> */}
      <Stack p={3} mt={5}>
        <Grid container spacing={4}>
          {boards.map((board) => (
            <BoardCard key={board.id} {...board} />
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default BoardsScreen;
