"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5005/client/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      console.log("user logged in successfully");
      router.push("/dashboard");
    } else {
      console.log("an error was found");
      alert("the data entered are incorrect")
    }
  };
  return (
    <div className="backgroundSignup bg-gray-50 w-full h-screen flex items-center justify-center">
      <Card className="w-[50%] font-sans font-extralight mx-[25%]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">EcoWatch Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit} method="post">
            <div className="grid gap-2 my-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                name="email"
                placeholder="Enter your email address"
                className="rounded-xl py-5 flex h-10 w-full border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2 my-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="rounded-xl py-5 flex h-10 w-full border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Link href={"/"}>Forgot password?</Link>
            </div>
            <div className="grid gap-2">
              <Button
                type="submit"
                className="w-[30%] text-black py-6 px-3 my-3 cursor-pointer rounded-xl self-center mx-[35%] bg-[#8895B3] text-lg"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="mx-[25%]">
          <Button
            variant="outline"
            className="border-gray-500 rounded-xl my-2 px-20 border"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            <span className="mt-1">Login with Google</span>
          </Button>
          <p className="my-2 text-center">
            Don't have an account yet?{" "}
            <Link
              href="/signup"
              className="text-[#8895B3] hover:text-[#002642]"
            >
              Signup
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
