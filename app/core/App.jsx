import React from 'react'
import Router from "./Router";
import { UserContextProvider } from "app/store/userContext";


export default function App() {
    return (
        <UserContextProvider>
            <Router/>
        </UserContextProvider>
    )
}
