import React from 'react'
import { useForm } from "react-hook-form";
import * as firebase from "firebase/app";

const signUp = async (data) => {
    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
};

export default function SignUp() {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(signUp)}>
            <input type="email" name="email" ref={register}/>
            <input type="password" name="password" ref={register}/>
            <button type="submit">Submit</button>
        </form>
    )
}
