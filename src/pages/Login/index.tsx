import React from "react";
import { Box, Button, Grid, TextField, Link } from "@mui/material";
import { UseNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../../layouts/Auth";
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { startClearMessageError, startFacebookSignIn, startGoogleSignIn, startLoginWithEmailPassword } from "../../redux/auth";


type LoginType = {
  email: string;
  password: string;
};

type Crendetials = {
  email: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const distpach = useAppDispatch();
  const { errorMessage } = useAppSelector((state) => state.auth);
  const { getError } = UseNotification();
  const formik = useFormik<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      const formState: Crendetials = {
        email: values.email,
        password: values.password,
      };
      distpach(startLoginWithEmailPassword(formState));
    },
  });

  if (errorMessage != null) getError(errorMessage);

  const handleFacebookLogin = () => {
    distpach(startFacebookSignIn());
  };

  const handleGoogleLogin = () => {
    distpach(startGoogleSignIn());
  };

  const handleRegister = () => {
    distpach(startClearMessageError());
  }

  return (
    <AuthLayout title="Bienvenido Guerrero!">
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          color="secondary"
          name="email"
          margin="normal"
          type="email"
          fullWidth
          label="Correo"
          sx={{ mt: 2, mb: 1.5 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
          sx={{ mt: 1.5, mb: 1, fontWeight:"bold" }}
        >
          Iniciar sesión
        </Button>

        <Button
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<FacebookIcon />}
          onClick={handleFacebookLogin}
          sx={{ mt: 1, mb: 1 }}
        >
          Iniciar con Facebook
        </Button>

        <Button
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
          sx={{ mt: 1, mb: 3 }}
        >
          Iniciar con Google
        </Button>

        <Grid container direction="row" justifyContent="end">
          <Link color="inherit" component={RouterLink} to="/register" onClick={handleRegister}>
            Crear una cuenta
          </Link>
        </Grid>
      </Box>
    </AuthLayout>
  );
};
