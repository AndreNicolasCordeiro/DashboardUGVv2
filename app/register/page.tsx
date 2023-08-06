"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (response.ok) {
      const signInResponse = await signIn("credentials", {
        username: email,
        password,
        callbackUrl: `${window.location.origin}/`, // Redirect after successful registration
      });

      if (signInResponse?.error) {
        // Handle sign-in error
      } else {
        // Redirect to dashboard
        window.location.href = "/";
      }
    } else {
      // Handle registration error
      alert("Erro interno");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-4 bg-white shadow-md">
        <h2 className="text-2xl font-semibold">Register</h2>
        <form className="space-y-2" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
