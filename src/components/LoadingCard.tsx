import React from "react";
import BusGif from "@/assets/BusGif.gif";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function LoadinCard() {
  return (
    <Card className=" w-4/12  m-auto border-2 border-rose-500">
      <CardHeader>
        <CardTitle className="m-auto text-rose-500">Loading..</CardTitle>
      </CardHeader>
      <CardContent>
        <Image className="m-auto" src={BusGif} alt="" height={200}></Image>
      </CardContent>
    </Card>
  );
}

export default LoadinCard;
