import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Login = () => {
  return (
    <div className="backgroundSignup h-full py-16">
      <Card className="w-[50%] font-sans font-extralight mx-[25%]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            EcoWatch Login
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="w-full px-8">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="rounded-xl py-5"
              />
          </div>
          <div className="grid gap-2 px-8">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="rounded-xl w-full py-5"
            />
          </div>
          <div className="flex gap-2">
            <Link href={'/'}>Forgot password?</Link>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full py-6 rounded-xl self-center mx-[35%] bg-[#8895B3] text-lg">
            Login
          </Button>
        </CardFooter>
        <div className="mx-[25%]">
          <Button
            variant="outline"
            className="border-gray-500 rounded-xl my-2 px-20 border"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            <span className='mt-1'>Login with Google</span>
          </Button>
          <p className="my-2 text-center">
            Don't have an account yet?{" "}
            <Link href="/signup" className="text-[#8895B3] hover:text-[#002642]">
              Signup
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
