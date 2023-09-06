import React from "react";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { startDeleteUser } from "../../redux/auth";

export const Profile: React.FC<{}> = () => {
  const { email, displayName, photoURL } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const onDeleteUser = () => {
    dispatch(startDeleteUser());
  };
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{ padding: "1rem", textAlign: "center", borderRadius: "10px" }}
          >
            {photoURL ? (
              <Avatar
                alt={displayName!}
                src={photoURL ? photoURL : ""}
                sx={{
                  width: 120,
                  height: 120,
                  margin: "0 auto 1rem auto",
                }}
              />
            ) : (
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  margin: "0 auto 1rem auto",
                  color: "#CDFE2F",
                  bgcolor: "#333F4E",
                }}
              >
                <h1>{displayName![0]}</h1>
              </Avatar>
            )}

            <Typography variant="h6"> {email} </Typography>
            <Typography variant="h6"> {displayName}</Typography>
            {/* <Button variant="outlined" sx={{ margin: "1rem" }}>
              Editar Perfil
            </Button> */}
            <Button
              variant="outlined"
              sx={{ margin: "1rem" }}
              color="error"
              onClick={handleOpenDialog}
            >
              Eliminar Mi Perfil
            </Button>
            <Dialog open={open} onClose={handleCloseDialog}>
              <DialogTitle color="error">Eliminar mi cuenta</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  ¿Realmente deseas eliminar tu perfil Guerrero?
                  Recuerda que si haces esto, perderas todo tu progreso.
                  Si no tienes un inicio de sesion reciente esto te enviara al Inicio de Sesion. 
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  Cancelar
                </Button>
                <Button onClick={onDeleteUser} color="error" variant="contained">
                  Eliminar mi perfil
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Agregar gráficos u otros elementos para mostrar el progreso */}
        </Grid>
      </Grid>
    </Container>
  );
};
