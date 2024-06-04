"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
  const webUrl = "https://ecowatch-hackathon.vercel.app";
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      'use server'
      const response = await fetch(`http://localhost:5005/client/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds delay

      setLoading(false);

      if (response.ok) {
        toast.success("User signed up successfully", {
          position: "top-center",
          autoClose: 3000,
        });
        router.push('/login');
      } else {
        toast.error("User already exists, use different credentials.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error: any) {
      toast.error("An error occurred while signing up. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("An error occurred during signup:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="backgroundSignup bg-gray-50 w-full h-screen flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl font-sans font-extralight mx-auto">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">
            EcoWatch SignUp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} method="post">
            <div className="gap-4 flex flex-col md:flex-row w-full my-2">
              <div className="w-full md:w-1/2">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Maria"
                  id="username"
                  className="rounded-xl py-5 h-10 w-full border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  className="rounded-xl py-5 h-10 w-full border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                className="rounded-xl w-full py-5 h-10 border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center my-2">
              <input type="checkbox" className="accent-[#002642]" required />
              <span>
                I agree to the terms and conditions that apply.
              </span>
            </div>
            <div className="grid">
              <Button
                type="submit"
                className="w-full py-3 my-3 text-center rounded-xl text-black bg-[#8895B3] text-lg cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Sign up"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="flex flex-col items-center mt-4">
          <Button
            variant="outline"
            className="border-gray-500 rounded-xl my-2 px-8 md:px-16 border"
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
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Signup;
