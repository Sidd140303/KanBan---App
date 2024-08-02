import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import ImageEl from "../../components/utils/ImageEl";
import LogoImg from "../../assets/logo.svg";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import CreateBoardIcon from "@mui/icons-material/AddCircle";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Topbar({ openModal }) {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  console.log(isXs);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <ImageEl
          sx={{
            height: "25px",
          }}
          src={LogoImg}
          alt="FlowBoard"
        />
        <Stack direction="row" spacing={2}>
          {isXs ? (
            <>
              <IconButton onClick={openModal} color="primary">
                <CreateBoardIcon />
              </IconButton>
              <IconButton onClick={() => signOut(auth)}>
                <LogoutIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Button variant="contained" onClick={openModal}>
                Create Board
              </Button>
              <Button
                onClick={() => signOut(auth)}
                startIcon={<LogoutIcon />}
                color="inherit"
              >
                Logout
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
