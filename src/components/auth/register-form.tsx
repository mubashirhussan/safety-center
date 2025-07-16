/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardFooter } from "@/components/ui/card";
import { Mail, Lock, User, Users, Building2 } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchFromStrapi } from "@/lib/api";

export function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    leader: "",
    department: "",
  });

  const [depData, setDepData] = useState<any[]>([]);
  const [leaderData, setLeaderData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [depRes, leaderRes] = await Promise.all([
          fetchFromStrapi<any>(
            "departments",
            {},
            {
              fields: ["Name_en", "id"],
            }
          ),
          fetchFromStrapi<any>(
            "leaders",
            {},
            {
              fields: ["Name", "id"],
            }
          ),
        ]);

        setDepData(depRes.data || []);
        setLeaderData(leaderRes.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    debugger;
    try {
      const res = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${form.firstName} ${form.lastName}`,
          email: form.email,
          password: form.password,
          leader: form.leader, // ✅ only if custom fields exist
          department: form.department, // ✅ only if custom fields exist
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("User registered!", data);
        alert("Registration successful!");
        // optionally save JWT to localStorage or redirect to login
      } else {
        console.error("Error registering:", data);
        alert(data.error?.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* First Name */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
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
          onChange={(e) => handleChange("lastName", e.target.value)}
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
          onChange={(e) => handleChange("email", e.target.value)}
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
          onChange={(e) => handleChange("password", e.target.value)}
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
          onChange={(e) => handleChange("repeatPassword", e.target.value)}
          className="pl-10 h-12 bg-white"
          required
        />
      </div>

      {/* Select Leader */}
      <div className="relative">
        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
        <Select onValueChange={(value) => handleChange("leader", value)}>
          <SelectTrigger className="w-full pl-10 h-12 bg-white focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select leader" />
          </SelectTrigger>
          <SelectContent>
            {leaderData.map((leader: any) => (
              <SelectItem key={leader.id} value={leader.id.toString()}>
                {leader?.Name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Select Department */}
      <div className="relative">
        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
        <Select onValueChange={(value) => handleChange("department", value)}>
          <SelectTrigger className="w-full pl-10 h-12 bg-white focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            {depData.map((dept: any) => (
              <SelectItem key={dept.id} value={dept.id.toString()}>
                {dept?.Name_en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="outline"
        className="w-full h-12 bg-[#28485D] cursor-pointer text-white font-medium"
      >
        Register
      </Button>

      <CardFooter className="flex justify-center px-8">
        <Link
          href="/auth/login"
          className="text-blue-600 cursor-pointer hover:text-blue-800 text-sm font-medium"
        >
          Login
        </Link>
      </CardFooter>
    </form>
  );
}
