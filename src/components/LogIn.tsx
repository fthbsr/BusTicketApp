"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";
import LoadingCard from "./LoadingCard";
import { showLoadingCard } from "@/lib/utils";

function LogIn() {
  const { userLogin } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const checkLoginInput = async (name: string, password: string) => {
    var hasError = await false;

    if (name === "") {
      await setUserNameError(true);
      hasError = true;
    } else {
      await setUserNameError(false);
    }

    if (password === "") {
      await setPasswordError(true);
      hasError = true;
    } else {
      await setPasswordError(false);
    }

    if (!hasError) {
      await setUserNameError(false);
      await setPasswordError(false);
      return true;
    } else {
      return false;
    }
  };

  const handleClick = async () => {
    if (await checkLoginInput(userName, password)) {
      try {
        await showLoadingCard(setLoading);
        await userLogin(userName, password);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col w-4/12 h-1/2 m-auto mt-20  border-2  border-rose-400 rounded-lg  ">
      {loading && (
        <div className="flex w-4/12  h-1/2 mb-24 justify-center items-center  absolute z-10  ">
          <LoadingCard />
        </div>
      )}

      <div className=" flex justify-center items-center  w-full h-20 font-medium italic text-rose-500 text-4xl ">
        <h1>Login</h1>
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

      <div className="flex  flex-col justify-around h-24 w-full m-auto ">
        <Button
          onClick={handleClick}
          className="m-auto w-8/12 rounded-full  bg-rose-500 text-white font-medium text-lg border-slate-200  mt-1 mb-1"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LogIn;
