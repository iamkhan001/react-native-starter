import { createContext, useContext } from 'react';
import { User } from './auth.types';

interface AuthContextProps {
  user: User | null;
}

export const AuthContext = createContext<AuthContextProps>({ user: null });
export const useAuth = () => useContext(AuthContext);
