"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import Link from "next/link";
const Login = () => {
  return (
    <div className="backgroundSignuplogin bg-gray-50 w-full h-screen flex items-center justify-center">
      <Card className="w-[50%] font-sans font-extralight mx-[25%]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            EcoWatch Login
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="rounded-xl py-5"
              />
            </div>
        
          <div className="flex flex-col gap-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="rounded-xl w-full py-5"
            />
          </div>
          <div className="flex justify-end">
            <a >forgot password?</a>
          </div>
        </CardContent>
        <CardFooter>
          <button className="w-full bg-primary dark:bg-muted  text-white hover:text-white p-4 rounded-xl self-center mx-[35%] bg-[#8895B3] text-lg">
          <Link href="/dashboard" className=" hover:text-white">
          Login
            </Link>
          </button>
        </CardFooter>
        <div className="mx-[25%]">
          <div
          
            className="border-gray-500 rounded-xl inline-flex my-2 py-2 font-medium text-sm px-20 border"
          >
            <Icons.google className="mr-2 h-4 w-4 mt-1" />
            Signup with Google
          </div>
          <p className="my-2 text-center">
                 Do not have an account?{" "}
            <Link href="/signup" className="text-[#8895B3] hover:text-[#002642]">
              Sign Up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
export default Login;