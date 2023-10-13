"use client";
import React, { useEffect, useState } from "react";
import LoadinCard from "./LoadingCard";
import CustomInput from "./CustomInput";
import { convertDateToString, genderList } from "@/lib/utils";
import CustomSelect from "./CustomSelect";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, setDate } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./ui/label";
import { UserInfo } from "@/type/type";
import { useRouter } from "next/navigation";

function SignUp() {

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const [nameError, setNameError] = useState<boolean>(false);
  const [surNameError, setSurnameError] = useState<boolean>(false);
  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [genderError, setGenderError] = useState<boolean>(false);
  const [birhError, setBirthError] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    convertDateToString(date, setBirthDate);
  }, [date]);


  const userSignUp = async (newUser: UserInfo) => {
    try {
      await fetch("https://65255fda67cfb1e59ce72c13.mockapi.io/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      await router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserInput = async (
    name: string,
    surName: string,
    userName: string,
    password: string,
    gender: string,
    birthDate: string
  ): Promise<boolean> => {
    await setNameError(false);
    await setSurnameError(false);
    await setUserNameError(false);
    await setPasswordError(false);
    await setGenderError(false);
    await setBirthError(false);

    var hasError = await false;

    if (name === "") {
      await setNameError(true);
      hasError = await true;
    }

    if (surName === "") {
      await setSurnameError(true);
      hasError = await true;
    }

    if (userName === "") {
      await setUserNameError(true);
      hasError = await true;
    }

    if (password === "") {
      await setPasswordError(true);
      hasError = await true;
    }

    if (gender === "") {
      await setGenderError(true);
      hasError = await true;
    }

    if (birthDate === "") {
      await setBirthError(true);
      hasError = await true;
    }

    return !hasError;
  };

  const handleClick = async () => {
    const newUser: UserInfo = await {
      Name: name,
      SurName: surname,
      Gender: gender,
      BirthDay: birthDate,
      UserName: userName,
      Password: password,
      id: "1",
    };
    console.log(await newUser);

    if (
      await checkUserInput(name, surname, userName, password, gender, birthDate)
    ) {
      try {
        await setLoading(true)
        await userSignUp(newUser);

      } catch (error) {
        await setLoading(false)
        console.log(error);
      }
    }
  };


  return (
    <div className="flex flex-col w-4/12 h-1/2 m-auto mt-20  border-2  border-rose-400 rounded-lg  ">
      {loading && (
        <div className="flex w-4/12  h-1/2 mb-24 justify-center items-center  absolute z-10  ">
          <LoadinCard />
        </div>
      )}

      <div className=" flex justify-center items-center  w-full h-20 font-medium italic text-rose-500 text-4xl ">
        <h1>SignUp</h1>
      </div>

      <div className="flex flex-col justify-around h-24 w-full m-auto">
        <CustomInput
          value={name}
          setValue={setName}
          type="text"
          showErrorMessage={nameError}
          label="Name"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="flex flex-col justify-around h-24 w-full m-auto">
        <CustomInput
          value={surname}
          setValue={setSurname}
          type="text"
          showErrorMessage={surNameError}
          label="Surname"
          placeholder="Enter Your Surname"
        />
      </div>
      <div className="flex flex-col justify-around h-24 w-full m-auto">
        <CustomInput
          value={userName}
          setValue={setUserName}
          type="text"
          showErrorMessage={userNameError}
          label="UserName"
          placeholder="Enter Your UserName"
        />
      </div>
      <div className="flex flex-col justify-around h-24 w-full m-auto">
        <CustomInput
          value={password}
          setValue={setPassword}
          type="Password"
          showErrorMessage={passwordError}
          label="Password"
          placeholder="Enter Your Password"
        />
      </div>
      <div className="flex flex-col justify-around h-24 w-full m-auto">
        <div className="m-auto w-8/12 h-full">
          <Label className="text-black text-start ml-1">BirthDay</Label>
          <CustomSelect
            value={gender}
            setValue={setGender}
            data={genderList}
            placeholder="Select your Gender"
          />
          {genderError && (
            <p className="text-red-500 text-start">Bu alan Bos Birakilamaz</p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-around h-24 w-full m-auto">
        <div className="m-auto w-8/12 h-full">
          <Label className="text-black text-start ml-1">BirthDay</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  " w-full bg-slate-100 ",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {birhError && (
            <p className="text-red-500 text-start">Bu alan Bos Birakilamaz</p>
          )}
        </div>
      </div>

      <div className="flex  flex-col justify-around h-24 w-full m-auto ">
        <Button
          onClick={handleClick}
          className="m-auto w-8/12 rounded-full  bg-rose-500 text-white font-medium text-lg border-slate-200  mt-1 mb-1"
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
