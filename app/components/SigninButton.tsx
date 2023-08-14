"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className=" border-custom-gray border rounded-md pl-4 pr-4 pb-1 pt-1 hover:border-green-800">
      <button onClick={() => signIn()} className="text-white ml-auto">
        Entrar
      </button>
    </div>
  );
};

export default SigninButton;
