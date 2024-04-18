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

const page = () => {
  return (
    <div className="backgroundSignup h-full py-16">
      <Card className="w-[50%] font-sans font-extralight mx-[25%]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            EcoWatch SignUp
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="gap-4 flex w-full">
            <div className="w-[50%]">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                name="username"
                placeholder="Maria"
                className="rounded-xl py-5"
              />
            </div>
            <div className="w-[50%]">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                className="rounded-xl py-5"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              className="rounded-xl w-full py-5"
            />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" className="accent-[#002642]" name="aggrement" value="agree" />
            <span className="mt-0.5">I agree to the terms and conditions that apply.</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full py-6 rounded-xl self-center mx-[35%] bg-[#8895B3] text-lg">
            Sign Up
          </Button>
        </CardFooter>
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
    </div>
  );
};

export default page;
