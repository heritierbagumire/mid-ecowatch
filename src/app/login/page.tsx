'use client'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading state to true when form is submitted

      const response = await fetch(`http://localhost:5005/client/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log({ token });
        localStorage.setItem("token", token);
        toast.success("User logged in successfully!");
        router.push("/dashboard");
      } else {
        toast.error("Invalid credentials. Please try again!");
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("An error occurred during authentication", error);
    } finally {
      setLoading(false); // Reset loading state after authentication attempt
    }
  };

  return (
    <div className="backgroundSignup bg-gray-50 w-full h-screen flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl font-sans font-extralight mx-[25%]">
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
                className="text-black py-6 px-20 my-3 cursor-pointer rounded-xl self-center bg-[#8895B3] text-lg"
                disabled={loading} // Disable button when loading state is true
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white mx-auto"
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
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="flex flex-col items-center">
          <Button
            variant="outline"
            className="border-gray-500 rounded-xl my-2 px-20 border"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            <span className="mt-1">Login with Google</span>
          </Button>
          <p className="my-2 text-center">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="text-[#8895B3] hover:text-[#002642]"
            >
              Signup
            </Link>
          </p>
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Login;
