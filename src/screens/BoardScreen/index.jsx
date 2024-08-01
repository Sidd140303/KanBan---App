import React, { useEffect, useMemo, useState } from "react";
import BoardTopbar from "./BoardTopbar";
import BoardInterface from "./BoardInterface";
import { useNavigate, useParams } from "react-router-dom";
import usestore from "../../store";
import useApp from "../../hooks/useApp";
import Apploader from "../../components/Layout/AppLoader";

function BoardScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const { boardId } = useParams();
  const { boards, areBoardsFetched } = usestore();
  const board = useMemo(() => boards.find((b) => b.id === boardId), []);
  const boardData = useMemo(() => data, [data]);

  const { fetchBoard } = useApp();
  const handleFetchBoard = async () => {
    try {
      const boardData = await fetchBoard(boardId);
      if (boardData) {
        const { lastUpdated, tabs } = boardData;
        setData(tabs);
        setLastUpdated(lastUpdated.toDate().toLocaleString("en-US"));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log({ data, lastUpdated, loading });

  useEffect(() => {
    if (!areBoardsFetched || !board) {
      navigate("/boards");
    } else {
      handleFetchBoard();
    }
  }, []);

  if (!board) return null;
  if (loading) return <Apploader />;

  return (
    <>
      <BoardTopbar
        name={board.name}
        color={board.color}
        lastUpdated={lastUpdated}
      />
      <BoardInterface boardData={boardData} boardId={boardId} />
    </>
  );
}

export default BoardScreen;
