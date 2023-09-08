import React, { useState } from 'react'
import httpClient from "../httpClient";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logInUser = async () => {
    console.log(email, password);

    try {
      const resp = await httpClient.post("//localhost:5000/login", {
        email,
        password,
      });

      window.location.href = "/";
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  };
  return (
     <main className='flex flex-col items-center justify-center w-full h-screen'>
      <h1>Log Into Your Account</h1>
      <form className='p-5 border-[1px] rounded-md flex flex-col gap-5 w-[400px]'>
        <div className='flex flex-col gap-3'>
          <label>Email: </label>
          <input
            className='border-[1px] rounded-sm p-2'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id=""
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label>Password: </label>
          <input
            className='border-[1px] rounded-sm p-2'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id=""
          />
        </div>
        <button className='w-full border-[1px] p-4 hover:bg-gray-300 rounded-sm' type="button" onClick={() => logInUser()}>
          Submit
        </button>
      </form>
    </main>
  )
}

export default Login