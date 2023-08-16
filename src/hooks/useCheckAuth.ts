import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout, checkingAuthentication } from '../redux/auth';

export const useCheckAuth = () => {
    const {status} = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkingAuthentication());
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout({}));
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
          });
    }, [dispatch])
    
    return {
        status
    }
}