import React from 'react'
import { useForm } from "react-hook-form";
import * as firebase from "firebase/app";

const signIn = async (data) => {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
};

export default function SignIn() {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(signIn)}>
            <input type="email" name="email" ref={register} />
            <input type="password" name="password" ref={register} />
            <button type="submit">Submit</button>
        </form>
    )
}
