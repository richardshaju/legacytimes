import React from "react";
import { FaGoogle } from "react-icons/fa";
const GoogleSignInButton = () => {
  return (
    <button className="bg-white text-gray-800 gap-2 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow flex items-center hover:bg-gray-100 focus:outline-none">
      <FaGoogle />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
