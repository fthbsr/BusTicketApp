"use client";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

interface CustomInputI {
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
  type: string;
  showErrorMessage: boolean;
  label:string;
  placeholder:string
}

function CustomInput({
  value,
  setValue,
  type,
  showErrorMessage,
  label,
  placeholder
}: CustomInputI) {
  const error = true;
  return (
      <div className="m-auto w-8/12 h-full">
        <Label className="text-black text-start ml-1">{label}</Label>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          className="m-auto bg-slate-100 border-2   w-full mt-1 mb-1 "
          type={type}
          placeholder={placeholder}
        />
        {showErrorMessage && (
          <p className="text-red-500 text-start">Bu alan Bos Birakilamaz</p>
        )}
      </div>
  );
}

export default CustomInput;
