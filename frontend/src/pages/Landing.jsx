import React from "react";
import Navbar from "../components/Navbar";
import imageBottomRight from "../assets/welcome.png";
import { SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center py-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">
          WELCOME TO CLEAN CATALOGUE!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Elevate catalog management: AI-driven scanning and scoring for
          insights and efficiency. <br></br> Streamline operations and optimize
          performance with ease.
        </p>
        <div className="flex justify-center">
          <SignInButton
            afterSignInUrl="/upload"
            afterSignUpUrl="/upload"
            className="py-2 px-4 bg-gray-200 text-black rounded-md mr-4"
          />
          <SignOutButton
            afterSignInUrl="/"
            afterSignUpUrl="/"
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          />
          <img
            src={imageBottomRight}
            alt="image-bottom-right"
            className="absolute bottom-5 right-5 w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
