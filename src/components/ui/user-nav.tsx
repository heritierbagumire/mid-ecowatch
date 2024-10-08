"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function UserNav() {
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        if (typeof window !== "undefined") {
          const storedToken = localStorage.getItem("token");
          const storedEmail = localStorage.getItem("email");

          setToken(storedToken);
          setEmail(storedEmail);
          const { data } = await axios.get(
            `https://mid-ecowatch-backend.onrender.com/client/email/${email}`,
            config
          );
          setUser(data);
          setLoading(false);
        }
        if (!token) {
          router.push("/login"); // Redirect to login if no token
        }
      } catch (error) {
        console.error(error);
        router.push("/login"); // Redirect to login if token is invalid
      }
    };

    fetchUser();
  }, [router, email, token]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="person.svg" alt="@shadcn" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          {user ? (
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.username}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Mike Doen</p>
              <p className="text-xs leading-none text-muted-foreground">
                mike@example.com
              </p>
            </div>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/login">Logout</Link>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
