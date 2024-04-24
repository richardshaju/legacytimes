import React from "react";
import { FiShare2 } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { VscFolderLibrary } from "react-icons/vsc";

import "../../App.css";
function TopBar() {
  return (
    <div className="w-full  p-4">
      <div className="md:h-48 rounded-xl  bg-[#141313c8] ">
        <div className="h-[60%] p-8 flex flex-row  text-white plus-jakarta">
          <div className="flex flex-col w-[70%] ">
            <h3 className="text-3xl font-semibold pb-2">
              Legacy Times Generator
            </h3>
            <p className="text-gray-500">
            Create a Legacy TImes within seconds
            </p>
          </div>
          <div className="flex w-[30%] flex-row justify-between align-middle items-center "></div>
        </div>
        <hr style={{ width: "100%", borderColor: "#222222" }} />
        <div className="flex flex-row items-center gap-10 p-6 ">
          <p className="flex flex-row  justify-evenly text-green-500 items-center gap-2  cursor-pointer">
            <FiTriangle size={"1.4rem"} color="green" />
            Generate
          </p>
          <p className="flex flex-row justify-evenly text-slate-400 items-center gap-2 hover:text-[#737373] cursor-pointer">
            <VscFolderLibrary />
            Library
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
