import { UserInfo } from "@/type/type";
import { type ClassValue, clsx } from "clsx";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const genderList = ["Male", "Female"];

export const showLoadingCard = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await setLoading(true);

  const timer = await setTimeout(() => {
    setLoading(false);
  }, 3000);
};

export const convertDateToString = async (
  date: Date | undefined,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  if (!date) {
    await setState("");
  } else {
    const day = await date.getDate().toString().padStart(2, "0");
    const moth = await (date.getMonth() + 1).toString().padStart(2, "0");
    const year = await date.getFullYear().toString();
    await setState(`${day}/${moth}/${year}`);
  }
};

