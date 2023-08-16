import {
    FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
  UserCredential,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider =  new FacebookAuthProvider();

type SignInResult = {
  ok: boolean;
  displayName?: string | null;
  email?: string | null;
  photoUrl?: string | null;
  uid?: string | null;
  errorMessage?: string | null;
};

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
      photoUrl: photoURL,
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
      photoUrl: photoURL,
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