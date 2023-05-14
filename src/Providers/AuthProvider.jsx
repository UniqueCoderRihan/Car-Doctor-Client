import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import app from '../Firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    // createUser
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unsubscrive = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscrive;
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
