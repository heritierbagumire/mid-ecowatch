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
          {/* <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div> */}
          {/* </div> */}
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
          <Button className="w-full py-6 rounded-xl self-center mx-[35%] bg-[#8895B3] text-lg">
          <Link href="/dashboard" className=" hover:text-[#002642]">
          Login
            </Link>
          </Button>
        </CardFooter>
        <div className="mx-[25%]">
          <Button
            variant="outline"
            className="border-gray-500 rounded-xl my-2 px-20 border"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Login with Google
          </Button>
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