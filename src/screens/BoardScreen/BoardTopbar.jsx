import { AppBar, Toolbar, Stack, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";
import { memo } from "react";

function BoardTopbar({ name, color, lastUpdated, deleteBoard }) {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: "5px solid",
        borderBottomColor: colors[color],
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={1} alignItems="center" direction="row">
          <IconButton onClick={() => navigate(`/boards`)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">{name}</Typography>
        </Stack>
        <Stack spacing={2} alignItems="center" direction="row">
          <Typography
            display={{
              xs: "none",
              sm: "block",
            }}
            variant="body2"
          >
            Last Updated : {lastUpdated}
          </Typography>
          <IconButton onClick={deleteBoard}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default memo(BoardTopbar);
