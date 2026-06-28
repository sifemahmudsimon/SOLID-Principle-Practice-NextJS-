"use client";

import React from "react";
import Button from "./Button";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
            <h1 className="text-xl font-bold">My App</h1>
            <div className="flex gap-2">
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </nav>
    );
}
