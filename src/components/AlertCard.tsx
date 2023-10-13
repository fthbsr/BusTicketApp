"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AlertCard(message :any) {
  return (
      <Card className=" w-4/12  m-auto border-2 border-rose-500">
        <CardHeader>
          <CardTitle className="m-auto text-rose-500">Hata</CardTitle>
        </CardHeader>
        <CardContent>
          <p  className="m-auto text-lg text-rose-500">{message}</p>
        </CardContent>
      </Card>
  );
}

export default AlertCard;