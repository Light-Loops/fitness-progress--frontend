import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, clearMessageError, login, logout } from "./authSlice"
import { logoutFirebase, registerUserWithEmailPassword, signInWithFacebook, signInWithGoogle } from "../../firebase/provider";

type Crendetials = {
    email: string,
    password: string,
    displayName: string
}

export const checkingAuthentication = () => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}:Crendetials) => {
    return async(dispatch: Dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, photoUrl, errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
        console.log(ok,uid,photoUrl,errorMessage);
        if(!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({uid, displayName, email, photoUrl}));
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