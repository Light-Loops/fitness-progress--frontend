import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, login, logout } from "./authSlice"
import { logoutFirebase, signInWithFacebook, signInWithGoogle } from "../../firebase/provider";

export const checkingAuthentication = () => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startFacebookSignIn = () => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithFacebook();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch: Dispatch) => {
        await logoutFirebase();
        dispatch(logout({}));
    }
}