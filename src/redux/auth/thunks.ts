import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, clearMessageError, login, logout } from "./authSlice"
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithFacebook, signInWithGoogle } from "../../firebase/provider";

type Credetials = {
    email: string,
    password: string,
    displayName?: string
}

export const checkingAuthentication = () => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}:Credetials) => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
        if(!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({uid, displayName, email, photoURL}));
    }
}

export const startLoginWithEmailPassword = ({email,password}:Credetials) => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());

        const {ok, displayName, uid, photoURL, errorMessage} = await loginWithEmailPassword({email,password});
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}))
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

export const startClearMessageError = () => {
    return async(dispatch: Dispatch) => {
        dispatch(clearMessageError());
    }
}