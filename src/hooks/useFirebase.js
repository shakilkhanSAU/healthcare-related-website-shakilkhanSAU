import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
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
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
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
        })
        return unsubscribed;
    }, []);



    return {
        user,
        createUser,
        logInUser,
        signInWithGoogle,
        logOut,
        setUser
    }
}

export default useFirebase;