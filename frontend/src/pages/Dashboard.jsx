import { SignIn, useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Dashboard = () => {
  const { user } = useUser();
  const hanldeCreateUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/create", {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        authID: user.id,
      });
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    hanldeCreateUser();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <p>Name : {user.fullName}</p>
        <p>Id : {user.id}</p>
        <p>Email Address : {user.primaryEmailAddress.emailAddress}</p>
        <p>Profile Image</p>
        <p>Full name : </p>
        {/* <img
          src={user?.imageUrl}
          className="w-12 h-12 rounded-full"
          alt="Profile Image"
        /> */}
      </div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
