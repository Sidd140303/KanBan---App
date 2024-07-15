import React from "react";
import OpenIcon from "@mui/icons-material/Launch";
import { Typography, IconButton, Grid, Stack, Box } from "@mui/material";

function BoardCard() {
  return (
    <Grid item xs={3}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft="5px solid"
        borderColor="white"
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
              Board Name
            </Typography>
          </Box>
          <IconButton size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">created at : 15/07/2024</Typography>
      </Stack>
    </Grid>
  );
}

export default BoardCard;
