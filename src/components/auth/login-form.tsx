'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardFooter } from '@/components/ui/card';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok && !res.error) {
      router.push('/my-account/my-info');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
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

      <div className="space-y-2">
        <Label htmlFor="password" className="sr-only">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="outline"
        className="w-full h-12 bg-[#28485D] cursor-pointer text-white font-medium"
      >
        Login
      </Button>

      <CardFooter className="flex justify-center space-x-1 px-8">
        <Link
          href="/auth/register"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Register account
        </Link>
        <span className="text-gray-400 text-sm">|</span>
        <Link
          href="/auth/forgot-password"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Forgot password?
        </Link>
      </CardFooter>
    </form>
  );
}
