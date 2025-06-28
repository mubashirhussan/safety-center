"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardFooter } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ForgotForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="sr-only">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium"
      >
        Send Email
      </Button>

      <CardFooter className="flex justify-center space-x-1 px-8">
        <Link
          href="/register"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Register account
        </Link>
        <span className="text-gray-400 text-sm">|</span>
        <Link
          href="/forgot-password"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Forgot password?
        </Link>
      </CardFooter>
    </form>
  );
}
