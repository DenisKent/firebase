import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {  userContext } from "app/store/userContext";

import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import SignOut from "../pages/SignOut/SignOut";

export default function Router() {
    const { user } = useContext(userContext);

    console.log(user?.email);
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-out" component={SignOut} />
            <Route path="*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
    </BrowserRouter >
    )
}
