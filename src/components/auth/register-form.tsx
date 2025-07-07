'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardFooter } from '@/components/ui/card';
import { Mail, Lock, User, Users, Building2 } from 'lucide-react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function RegisterForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    leader: '',
    department: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* First Name */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          className="pl-10 h-12 bg-white"
          required
        />
      </div>

      {/* Last Name */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Last name"
          value={form.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          className="pl-10 h-12 bg-white"
          required
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="pl-10 h-12 bg-white"
          required
        />
      </div>

      {/* Password */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="pl-10 h-12 bg-white"
          required
        />
      </div>

      {/* Repeat Password */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="password"
          placeholder="Repeat your password"
          value={form.repeatPassword}
          onChange={(e) => handleChange('repeatPassword', e.target.value)}
          className="pl-10 h-12 bg-white"
          required
        />
      </div>

      {/* Select Leader */}
      <div className="relative">
        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
        <Select onValueChange={(value) => handleChange('leader', value)}>
          <SelectTrigger className="w-full pl-10 h-12 bg-white focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select leader" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="leader1">Leader 1</SelectItem>
            <SelectItem value="leader2">Leader 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Select Department */}
      <div className="relative">
        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
        <Select onValueChange={(value) => handleChange('department', value)}>
          <SelectTrigger className="w-full pl-10 h-12 bg-white focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dept1">Department 1</SelectItem>
            <SelectItem value="dept2">Department 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="outline"
        className="w-full h-12 bg-[#28485D]  text-white font-medium"
      >
        Register
      </Button>

      <CardFooter className="flex justify-center px-8">
        <Link
          href="/auth/login"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Login
        </Link>
      </CardFooter>
    </form>
  );
}
