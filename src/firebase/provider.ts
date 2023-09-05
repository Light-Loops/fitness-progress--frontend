import {
  createUserWithEmailAndPassword,
    FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider =  new FacebookAuthProvider();

type SignInResult = {
  ok: boolean;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  uid?: string | null;
  errorMessage?: string | null;
};

type Credetials = {
  email: string,
  password: string,
  displayName?: string
}

export const registerUserWithEmailPassword = async ({email,password,displayName}:Credetials): Promise<SignInResult> => {
  try {
    const result: UserCredential = await createUserWithEmailAndPassword(FirebaseAuth, email,password);
    const { uid, photoURL} = result.user;
    await updateProfile(FirebaseAuth.currentUser!, {displayName});

    return {
      ok: true,
      uid, 
      photoURL, 
      email, 
      displayName
    }

  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return {
      ok: false,
      errorMessage,
    };
  }
}

export const loginWithEmailPassword = async({email, password}: Credetials): Promise<SignInResult> => {
  try {
    const result: UserCredential = await signInWithEmailAndPassword(FirebaseAuth,email,password);
    const {displayName, photoURL, uid} = result.user;
    return {
      ok: true,
      uid, 
      photoURL, 
      email, 
      displayName
    }
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return {
      ok: false,
      errorMessage,
    };
  }
}

export const signInWithGoogle = async (): Promise<SignInResult> => {
  try {
    const result: UserCredential = await signInWithRedirect(
      FirebaseAuth,
      googleProvider
    );
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const signInWithFacebook = async (): Promise<SignInResult> => {
  try {
    const result: UserCredential = await signInWithRedirect(
      FirebaseAuth,
      facebookProvider
    );
    
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    return {
      ok: false,
      errorMessage: errorMessage,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : "An unknown error occurred.";
}