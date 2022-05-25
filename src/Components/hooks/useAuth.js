import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authenticationApp } from "../../App";

export function useAuth() {
    const [authentication, setAuthentication] = useState(null);

    const auth = getAuth;
    const logIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authenticationApp, provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const logOut = () => {
        signOut(auth)
            .then((e) => {
            console.log(e)
            })
            .catch((err) => {
                console.log(err)
            });
    };


    useEffect(() => {
        auth().onAuthStateChanged(function(user) {
            if (user) {
                setAuthentication(user);
            }
        });
    }, [authentication]);

    return { authentication, logIn, logOut };
}
