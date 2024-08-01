import React from "react";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import ImageEl from "../../components/utils/ImageEl";
import LogoImg from "../../assets/logo.svg";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Topbar({ openModal }) {
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
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
