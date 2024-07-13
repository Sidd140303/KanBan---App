import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import usestore from "./store";
import AppLoader from "./components/Layout/AppLoader";

//screens
import Authscreen from "./screens/AuthScreens";
import BoardsScreen from "./screens/BoardsScreen";

//Utils
import PublicOnlyRoute from "./components/utils/PublicOnlyRoute";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  const { loader, setLoginStatus } = usestore();

  console.log(loader);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoginStatus(!!user);
    });
    return () => unsub();
  }, []);

  if (loader) return <AppLoader />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PublicOnlyRoute Component={Authscreen} />}
          />
          <Route
            path="/boards"
            element={<PrivateRoute Component={BoardsScreen} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
