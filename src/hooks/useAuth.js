import { useContext } from 'react';
import { AuthContext } from 'src/contexts/ApiAuthContext';

export const useAuth = () => useContext(AuthContext);
