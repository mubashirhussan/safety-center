"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <Button
      type="button"
      variant="outline"
      className="bg-[#28485D] text-white cursor-pointer"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Logout
    </Button>
  );
}
