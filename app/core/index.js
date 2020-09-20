import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/auth";

import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyDzq47Adb8urM-av3QuywARBGBgqv-3EiA",
    authDomain: "profile-5e173.firebaseapp.com",
    databaseURL: "https://profile-5e173.firebaseio.com",
    projectId: "profile-5e173",
    storageBucket: "profile-5e173.appspot.com",
    messagingSenderId: "1080680004752",
    appId: "1:1080680004752:web:548f3c9a5c2890f22fac15",
    measurementId: "G-MYVPGXEPTE"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
