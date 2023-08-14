import React from "react";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { UseNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../../layouts/Auth";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getSuccess } = UseNotification();
  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values));
    },
  });

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <AuthLayout title="Bienvenido guerrero!">
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          color="secondary"
          name="username"
          margin="normal"
          type="email"
          fullWidth
          label="Correo"
          sx={{ mt: 2, mb: 1.5 }}
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          color="secondary"
          name="password"
          margin="normal"
          type="password"
          fullWidth
          label="Contraseña"
          sx={{ mt: 1.5, mb: 1.5 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 1.5, mb: 1 }}
        >
          Iniciar sesión
        </Button>

        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          startIcon={<FacebookIcon />}
          onClick={handleFacebookLogin}
          sx={{ mt: 1, mb: 1 }}
        >
          Iniciar con Facebook
        </Button>

        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
          sx={{ mt: 1, mb: 3 }}
        >
          Iniciar con Google
        </Button>
      </Box>
    </AuthLayout>
  );
};
