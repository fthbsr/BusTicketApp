import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

function BasketButton() {
  const router = useRouter();
  const basketPrice = 123.223;
  return (
      <Button
        onClick={() => {
          router.push("singup");
        }}
        className="w-full h-full rounded-full bg-white text-rose-500 font-medium  border-slate-200 text-xs"
      >
        Sepet: {basketPrice.toFixed(1)} ₺
      </Button>
    
  );
}

export default BasketButton;
