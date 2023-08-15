import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage } from "./pages";
import { RouterLayout } from "./common/RouterLayout";
import { LoginPage } from "./pages/Login";
import { useCheckAuth } from "./hooks/useCheckAuth";
export const AppRouter: React.FC = () => {
  const { status } = useCheckAuth();
  console.log(status);
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<HomePage />} />
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
