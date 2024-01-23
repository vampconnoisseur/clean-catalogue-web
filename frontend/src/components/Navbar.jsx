import React from "react";
import { SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="px-16 w-full h-16 flex justify-between items-center bg-red-100">
      <div>
        <h1>LOGOG</h1>
      </div>
      <div>
        {isSignedIn ? (
          <SignOutButton />
        ) : (
          <SignInButton
            afterSignInUrl="/dashboard"
            afterSignUpUrl="/dashboard"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
