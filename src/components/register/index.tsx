"use client";

import { register } from "@/core/actions";
import { Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";

const Register = () => {
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      register(
        e.target.name.value,
        e.target.email.value,
        e.target.password.value
      );

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {}
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch gap-4 max-w-64"
      >
        <TextField label="Name" name="name" />
        <TextField label="Email" name="email" />
        <TextField label="Password" name="password" />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
