"use client";

import { Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const handleSubmit = async (values: any) => {
    try {
      values.preventDefault();

      const res = await signIn("credentials", {
        redirect: false,
        email: values.target.email.value,
        password: values.target.password.value,
        redirectTo: callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      }
    } catch (error: any) {
      console.error("error", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch gap-4 max-w-64"
      >
        <TextField label="Email" name="email" />
        <TextField label="Password" name="password" />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
