import React from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { UseNotification } from "../../context/notification.context";
import { RegisterValidate } from "../../utils/validateForm";
import { useFormik } from "formik";
import { AuthLayout } from "../../layouts/Auth";
import { Link as RouterLink } from "react-router-dom";

type LoginType = {
  username: string;
  password: string;
  confirmPassword: string,
};

export const RegisterPage: React.FC<{}> = () => {
  const { getSuccess } = UseNotification();
  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: ''
    },
    validationSchema: RegisterValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values));
    },
  });

  return (
    <AuthLayout title="Conviertete en un Guerrero. Ahora!">
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
        <TextField
          color="secondary"
          name="confirmPassword"
          margin="normal"
          type="password"
          fullWidth
          label="Repite la contraseña"
          sx={{ mt: 1.5, mb: 1.5 }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 1.5, mb: 3 }}
        >
          Registrar
        </Button>

        <Grid container direction="row" justifyContent="end">
          <Link color="inherit" component={RouterLink} to="/login">
            Iniciar Sesión
          </Link>
        </Grid>
      </Box>
    </AuthLayout>
  );
};
