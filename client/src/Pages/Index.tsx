import React from "react";
import { useNavigate } from "react-router";

const Index = () => {
  const naviged = useNavigate();

  return (
    <section className="">
      <header className="flex flex-col justify-center items-center gap-5 w-full h-[100vh]">
        <h1 className="text-5xl">Welcome to this react app</h1>
        <br />
        <p className="text-xl">du er ikke logget ind</p>
        <div className="flex flex-row gap-[10px]">
          <button
            onClick={() => naviged(`/Login`)}
            className="px-[20px] py-[10px] border-[1px] border-black"
          >
            Login
          </button>
          <button
            onClick={() => naviged(`/register`)}
            className="px-[20px] py-[10px] border-[1px] border-black"
          >
            Register
          </button>
        </div>
      </header>
    </section>
  );
};

export default Index;
