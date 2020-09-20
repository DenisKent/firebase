import React from 'react'
import * as firebase from "firebase/app";

export default function SignOut() {
    firebase.auth().signOut()
    return (
        <div>
            You are out!
        </div>
    )
}
