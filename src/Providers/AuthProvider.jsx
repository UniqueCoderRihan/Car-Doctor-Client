import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";

import app from '../Firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {


    const authInfo = {

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
