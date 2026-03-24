import React from "react";
import toast from "react-hot-toast";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

function HomePage() {
  return (
    <>
      <h1 className="text-red-500">Welcome to the App!</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          toast.success("This is a success message!");
        }}
      >
        Primary Button
      </button>
      <Show when="signed-out">
        <SignInButton />
        <SignUpButton />
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </>
  );
}

export default HomePage;
