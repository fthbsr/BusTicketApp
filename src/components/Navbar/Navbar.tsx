"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import BasketButton from "./BasketButton";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import UserInfoButton from "./UserInfoButton";

function Navbar() {
  const router = useRouter();
  const { loginUser } = useAuth();

  return (
    <div className="flex flex-row justify-between bg-rose-500  h-16">
      <div className="flex justify-center items-center  w-2/12 mx-5 ">
        <h1
          className="text-white font-bold text-3xl"
          onClick={() => {
            router.push("/");
          }}
        >
          FBilet
        </h1>
      </div>

      <div className="flex flex-row justify-around items-center  w-3/12 mx-10  ">
        {!loginUser && (
          <>
            <div className="flex justify-center w-1/3 h-2/3">
              <Button
                onClick={() => {
                  router.push("/login");
                }}
                className="w-full h-full rounded-full bg-white text-rose-500 font-medium text-lg border-slate-200 "
              >
                Login
              </Button>
            </div>
            <div className="flex justify-center w-1/3 h-2/3">
              <Button
                onClick={() => {
                  router.push("/signUp");
                }}
                className="w-full h-full rounded-full bg-white text-rose-500 font-medium text-lg border-slate-200 "
              >
                SignUp
              </Button>
            </div>
          </>
        )}

        {loginUser && (
          <>
            <div className="flex justify-center w-1/3 h-2/3">
              <BasketButton />
            </div>
            <div className="flex justify-center w-1/3 h-2/3">
              <UserInfoButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
