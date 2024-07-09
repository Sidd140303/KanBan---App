import React, { useState } from "react";
import { Container, Stack, Button, Typography, TextField } from "@mui/material";
import LogoImg from "../../assets/logo.svg";
import ImageEl from "../../components/utils/ImageEl";
import { Form } from "react-router-dom";

const initForm = {
  email: "",
  password: "",
};

function Authscreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState(initForm);
  const AuthText = isLogin
    ? "Do not have an account? "
    : "Already have an account...";

  const handlleChange = (event) => {
    setForm((oldform) => ({
      ...oldform,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAuth = () => {};

  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 10,
      }}
    >
      <Stack spacing={4} mb={6} alignItems="center" textAlign="center">
        <ImageEl src={LogoImg} alt="KanBan" />
        <Typography color="rgba(255, 255, 255, 0.6)">
          Visualize Your Workflow for Increased Productivity. <br />
          Access Your Tasks Anytime, Anywhere
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <TextField
          value={form.email}
          name="email"
          onChange={handlleChange}
          label="Email"
        />
        <TextField
          value={form.password}
          name="password"
          onChange={handlleChange}
          label="Password"
        />
        <Button
          disabled={!form.email.trim() || !form.password.trim()}
          onClick={handleAuth}
          size="large"
          variant="contained"
        >
          {isLogin ? "Login" : "Register"}
        </Button>
      </Stack>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        mt={3}
        textAlign="center"
        onClick={() => setIsLogin((o) => !o)}
      >
        {AuthText}
      </Typography>
    </Container>
  );
}

export default Authscreen;
