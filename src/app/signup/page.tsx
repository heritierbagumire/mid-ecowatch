"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import Link from "next/link";

const Signup: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5005/client/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (response.ok) {
      console.log("user signed up successfully");
      toast.success("User signed up successfully");
      router.push('/login');
      
    } else {  
      console.log("an error was found");
      toast.error("User already exists, use different credentials.");
      
    }
  };

  return (
    <div className="backgroundSignup bg-gray-50 w-full h-screen flex items-center justify-center">
      <Card className="w-[50%] font-sans font-extralight mx-[25%]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            EcoWatch SignUp
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit} method="post">
            <div className="gap-4 flex w-full my-2">
              <div className="w-[50%]">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Maria"
                  id="username"
                  className="rounded-xl py-5 flex h-10 w-full border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={username} onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-[50%]">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  className="rounded-xl py-5 flex h-10 w-full border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2 my-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Use a strong password"
                className="rounded-xl w-full py-5 flex h-10 border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="accent-[#002642]" required />
              <span className="mt-0.5">
                I agree to the terms and conditions that apply.
              </span>
            </div>
            <div className="grid gap-2">
              <Button
                type="submit"
                className="w-[30%] mx-[35%] py-6 px-3 my-3 text-center rounded-xl text-black bg-[#8895B3] text-lg cursor-pointer"
              >Sign up</Button>
            </div>
          </form>
        </CardContent>

        <div className="mx-[25%]">
          <Button
            variant="outline"
            className="border-gray-500 rounded-xl my-2 px-20 border"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Signup with Google
          </Button>
          <p className="my-2 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-[#8895B3] hover:text-[#002642]">
              Login
            </Link>
          </p>
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Signup;
