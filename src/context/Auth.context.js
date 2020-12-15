import { createContext } from 'react';

function zero () {}


export const AuthContext = createContext({
    token: null,
    login: zero,
    logout: zero,
    isAuthenticated: false,
})