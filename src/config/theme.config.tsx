import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProps = {
  children: JSX.Element;
};

export enum ThemePalette {
  BG = "#333F4E",
  NEON = "#99a8b4",
  NEON2='#F9F9F8',
  FONT_GLOBAL = "'Montserrat', sans-serif",
  //Alerts
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244, 67, 54, 0.1)",
  SUCCESS_MAIN = "#63ad6e",
  BG_SUCCESS_MAIN = "rgba(102, 187, 106)",
  WARNING = "#e09d36",
  CARD = "#333F4E",
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: ThemePalette.BG,
    },
    primary: {
      main: ThemePalette.NEON,
    },
    secondary: {
      main: ThemePalette.NEON2,
    },
    error: {
      main: ThemePalette.ERROR_MAIN,
      contrastText: '#fff',
    },
    success: {
      main: ThemePalette.SUCCESS_MAIN,
      contrastText: '#fff',
    },
    warning: {
      main: ThemePalette.WARNING,
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ThemePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '0.5em',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemePalette.ERROR_MAIN}`,
          backgroundColor: ThemePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${ThemePalette.SUCCESS_MAIN}`,
          backgroundColor: ThemePalette.BG_SUCCESS_MAIN,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: ThemePalette.CARD,
          color: ThemePalette.NEON2,
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
