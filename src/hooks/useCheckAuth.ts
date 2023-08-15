import { useAppSelector } from '../redux/hooks'

export const useCheckAuth = () => {
    const {status} = useAppSelector((state) => state.auth);
    
    return {
        status
    }
}