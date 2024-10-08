import { createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);

    const createUser = (email, password) => {
        setUserLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setUserLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google
    const googleLogin = () => {
        setUserLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Sign in with Facebook
    const facebookLogin = () => {
        setUserLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    // Sign in with Github
    const githubLogin = () => {
        setUserLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // Sign in with Twitter
    const twitterLogin = () => {
        setUserLoading(true);
        return signInWithPopup(auth, twitterProvider)
    }

    const logOut = () => {
        setUserLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setUserLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, createUser, userLogin, googleLogin, facebookLogin, githubLogin, twitterLogin, logOut, userLoading, setUserLoading };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;