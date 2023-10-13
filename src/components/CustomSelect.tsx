import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

interface CustomSelectI {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
  data: string[];
  placeholder:string
}

function CustomSelect({ value,setValue,data ,placeholder}:CustomSelectI) {
  return (
      <Select onValueChange={setValue} defaultValue={value} >
        <SelectTrigger  className="m-auto w-full bg-slate-100 ">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data.map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
  );
}

export default CustomSelect;
