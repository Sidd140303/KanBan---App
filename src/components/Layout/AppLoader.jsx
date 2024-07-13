import { Stack, CircularProgress } from "@mui/material";

function AppLoader() {
  return (
    <Stack mt={10} alignItems="center">
      <CircularProgress />
    </Stack>
  );
}

export default AppLoader;
