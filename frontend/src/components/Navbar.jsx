import React from "react";
import { SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="relative px-16 w-full h-16 flex justify-between items-center bg-blue-500">
      <div>
        <img
          src={logo}
          alt="logo"
          className="logo w-48 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <div className="relative">
        {isSignedIn ? (
          <div className="relative">
            <SignOutButton className="py-2 px-4 bg-white text-black rounded-md shadow-inner" />
          </div>
        ) : (
          <SignInButton
            afterSignInUrl="/dashboard"
            afterSignUpUrl="/dashboard"
            className="py-2 px-4 bg-white text-black rounded-md shadow-inner"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
