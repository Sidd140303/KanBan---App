import React from "react";
import OpenIcon from "@mui/icons-material/Launch";
import { Typography, IconButton, Grid, Stack, Box } from "@mui/material";
import { colors } from "../../theme";
import { useNavigate } from "react-router-dom";

function BoardCard({ name, color, createdAt, id }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={3}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft="5px solid"
        borderColor={colors[color]}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="50%">
            <Typography
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight={400}
              variant="h6"
            >
              {name}
            </Typography>
          </Box>
          <IconButton onClick={() => navigate(`/boards/${id}`)} size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">created at : {createdAt}</Typography>
      </Stack>
    </Grid>
  );
}

export default BoardCard;
