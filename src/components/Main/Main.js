import React from "react";
import TopBar from "./TopBar";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { SlBulb } from "react-icons/sl";

import { FaPencilAlt } from "react-icons/fa";
import InputBox from "./InputBox";
function Main() {
  return (
    <div className="w-full h-screen px-4 flex items-center flex-col">
      <div className="w-[50%] ">
        <div className="flex justify-center items-center content-center text-center pt-2 ">
          <div className="text-white plus-jakarta">
            <h2 className="font-bold text-2xl">Innovation Starter Pack</h2>
            <p>
              Kickstart your innovation process with our comprehensive selection
              of predefined prompts.
            </p>
          </div>
        </div>
        <div>
        </div>
        <InputBox />
      </div>
    </div>
  );
}

export default Main;
