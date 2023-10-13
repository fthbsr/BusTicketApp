"use client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { useAuth } from "@/context/AuthContext";

function UserInfoButton() {
  const {loginUser} = useAuth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full h-full rounded-full text-md bg-white text-rose-500 font-medium text-lg border-slate-200 ">
          {loginUser?.Name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem  className="bg-slate-100 text-red-500">
          <LogOut className="mr-2 h-4 w-4 " />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserInfoButton;
