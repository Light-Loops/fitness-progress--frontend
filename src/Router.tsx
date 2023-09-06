import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage } from "./pages";
import { RouterLayout } from "./common/RouterLayout";
import { LoginPage } from "./pages/Login";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { Grid, CircularProgress } from "@mui/material";
import { Profile} from "./pages/Profile";

export const AppRouter: React.FC = () => {
  const { status } = useCheckAuth();
  
  if (status === "checking") {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", padding: 4 }}
      >
        <Grid container direction="row" justifyContent="center">
          <CircularProgress color="primary" />
        </Grid>
      </Grid>
    );
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Route>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to={"/login"} />} />
        </>
      )}
    </Routes>
  );
};
