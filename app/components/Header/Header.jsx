import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-out">Sign Out</Link>
        </div>
    )
}
