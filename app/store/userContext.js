import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase/app";

const userContext = createContext({});

const { Provider } = userContext;

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("auth state change")
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });
    }, []);


    const updateUser = newObj => {
        setUser({ ...user, ...newObj });
    };

    return <Provider value={{ user, updateUser }}>{children}</Provider>;
};

export { userContext, UserContextProvider };
