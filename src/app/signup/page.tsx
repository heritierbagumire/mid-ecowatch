"use client";
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
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

interface S {
  username: string;
  email: string;
  password: string;
}

const Page: React.FC = () => {

  const [formData, setFormData] = useState<S>({
    username: '',
    email: '',
    password: '',
  });
  
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/api/signup', formData);
      console.log(response.data);
      router.push('/dashboard');
      // Handle successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error
    }
  };
  return (
    <div className="backgroundSignuplogin bg-gray-50 w-full h-screen flex items-center justify-center">
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
                value={formData.username}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" className="accent-[#002642]" name="aggrement" value="agree" />
            <span className="mt-0.5">I agree to the terms and conditions that apply.</span>
          </div>
        </CardContent>
        <CardFooter>
          
          <button
            type="submit"
            className="w-full px-2 py-3 rounded-xl  dark:bg-muted  text-white self-center mx-[35%] bg-[#8895B3] text-lg"
            onClick={handleSubmit}
          >
            <Link href="/login" className="hover:text-[#002642]">
            Sign Up
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

export default Page;
