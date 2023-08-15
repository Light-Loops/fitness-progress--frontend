import * as yup from 'yup';

export const LoginValidate = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('El correo es requerido')
    .email('Ingresa una dirección de correo válida'),
  password: yup
    .string()
    .trim()
    .required('La contraseña es requerida')
    .min(4, 'El minimo debe ser 4 caracteres')
    .max(20, 'El maximo debe ser 20 caracteres'),
});

export const RegisterValidate = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('El correo es requerido')
    .email('Ingresa una dirección de correo válida'),
  password: yup
    .string()
    .trim()
    .required('La contraseña es requerida')
    .min(4, 'El minimo debe ser 4 caracteres')
    .max(20, 'El maximo debe ser 20 caracteres'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Confirma tu contraseña'),
});