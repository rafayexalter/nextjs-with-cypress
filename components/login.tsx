"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  const onSubmitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      setMessage("Logged in");
    } else {
      setMessage("Failed");
    }

    console.log(username, password);
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-6">Login</h2>
      <form className="flex flex-col gap-3" onSubmit={onSubmitHandle}>
        <Input
          type="text"
          placeholder="Username"
          className="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          className="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="btn-submit" variant="secondary">
          Submit
        </Button>
      </form>

      {message == "Logged in" && (
        <span className="message block my-4 bg-green-600 py-2 px-4 text-white">
          {message}
        </span>
      )}

      {message === "Failed" && (
        <span className="message block my-4 bg-red-600 py-2 px-4 text-white">
          {message}
        </span>
      )}
    </div>
  );
};
export default LoginForm;
