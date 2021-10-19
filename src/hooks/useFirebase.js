import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // email password authentication system
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                console.log(result.user)
                varifyEmail();
            })
            .catch((error) => {

            });
    }

    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(user)
            })
            .catch(error => {

            })
    }



    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => {
            setIsLoading(false)
        })
    }

    // varify  email 
    const varifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // user state observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return unsubscribed;
    }, []);



    return {
        user,
        createUser,
        logInUser,
        signInWithGoogle,
        logOut,
        setUser,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;