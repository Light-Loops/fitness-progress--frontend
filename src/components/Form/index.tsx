import React from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { useFormik } from "formik";

type UserInfo = {
    weight: string;
    height: string;
    age: number;
    fitnessLevel: string;
};

const FitnessLevels = ["Principiante", "Intermedio", "Avanzado"];

export const UserInfoForm: React.FC<{ onSubmit: (values: UserInfo) => void }> = ({ onSubmit }) => {
const formik = useFormik<UserInfo>({
    initialValues: {
        weight: "",
        height: "",
        age: 0,
        fitnessLevel: "",
    },
    onSubmit: (values: UserInfo) => {
    onSubmit(values);
    },
});

    return (
    <Container maxWidth="sm">
        <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '80vh' }}
        >
        <Grid item>
            <Paper sx={{ padding: '1.2em', borderRadius: '0.5em', backgroundColor: '#061A26' }}>
            <Box component="form" onSubmit={formik.handleSubmit}>
                <TextField
                name="weight"
                margin="normal"
                type="string"
                fullWidth
                label="Peso (kg)"
                sx={{ mt: 2, mb: 1.5 }}
                value={formik.values.weight}
                onChange={formik.handleChange}
                />
                <TextField
                name="height"
                margin="normal"
                type="string"
                fullWidth
                label="Talla (cm)"
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.height}
                onChange={formik.handleChange}
                />
                <TextField
                name="age"
                margin="normal"
                type="string"
                fullWidth
                label="Edad"
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.height}
                onChange={formik.handleChange}
                />
                <FormControl fullWidth sx={{ mt: 1.5, mb: 1.5 }}>
                <InputLabel>Nivel de entrenamiento</InputLabel>
                <Select
                    name="fitnessLevel"
                    value={formik.values.fitnessLevel}
                    onChange={formik.handleChange}
                >
                    {FitnessLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                        {level}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
                <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
                >
                Continuar
                </Button>
            </Box>
            </Paper>
        </Grid>
        </Grid>
    </Container>
  );
};
