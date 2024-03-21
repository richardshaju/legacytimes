import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiWalletLight } from "react-icons/pi";
import "../App.css";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbPentagon } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
function Sidebar() {
  return (
    <div className="h-full py-4 pl-4 sm:w-[40%] md:w-[23%]">
      <div className="h-[52rem] rounded-xl  bg-[#141313c8] ">
        <div className="flex flex-row p-6 w-full items-center  justify-between">
          <div className="flex items-center">
            <img
              className="w-12  rounded-full"
              src="https://media.wired.com/photos/5daa44f7182de80009f7fdab/1:1/w_1418,h_1418,c_limit/photo_space_infrared_ssc2006-02a.jpg"
            />
            <p className="text-white text-sm pl-4 plus-jakarta">
              Milky Way
              <br />
              <p className="text-xs text-green-500">12&nbsp;members</p>
            </p>
          </div>
          <RiArrowDropDownLine color="white" size={"1.6rem"} />
        </div>
        <div className="text-slate-600"></div>
        <hr style={{ width: '100%', borderColor: '#222222' }} />
        <div className="px-7 py-8 plus-jakarta">
          <p className="text-gray-600 text-sm">GENREAL</p>
          <div className=" text-white mt-7">
            <div className="flex flex-row items-center justify-between hover:text-[#8e8e8e] cursor-pointer">
              <div className="flex ">
                <CiSearch size={"1.4rem"} color="#4b5557" />
                <p className="pl-5 text-sm">Search</p>
              </div>
              <kbd className="custom-kbd w-10 h-7 text-[#cfcfcf] text-center rounded-md border border-gray-600 ">
                ⌘S
              </kbd>
            </div>
            <div className="flex flex-row mt-6 items-center hover:text-[#8e8e8e]  cursor-pointer">
              <PiWalletLight size={"1.4rem"} color="#4b5557" />
              <p className="pl-5 text-sm">Billing</p>
            </div>
          </div>
        </div>
        <div className="px-7 py-8 plus-jakarta">
          <p className="text-gray-600 text-sm">PROJECTS</p>
          <div className=" text-white mt-7">
            <div className="flex flex-row items-center justify-between hover:text-[#00c314] cursor-pointer">
              <div className="flex">
                <FaRegSquare size={"1.4rem"} color="#00c314" />
                <p className="pl-5 text-sm">Orbital Oddyesy</p>
              </div>
            </div>
            <div className="flex flex-row mt-6 items-center hover:text-[#e90600] cursor-pointer">
              <FiTriangle size={"1.4rem"} color="#e90600" />
              <p className="pl-5 text-sm">Digital Product Launch</p>
            </div>
            <div className="flex flex-row mt-6 items-center hover:text-[#e90600] cursor-pointer ">
              <FaRegSquare size={"1.4rem"} color="#e90600" />
              <p className="pl-5 text-sm">Brand Refresh</p>
            </div>
            <div className="flex flex-row mt-6 items-center hover:text-[#00c2ff] cursor-pointer">
              <TbPentagon size={"1.4rem"} color="#00c2ff" />
              <p className="pl-5 text-sm">Social Media Strategy</p>
            </div>
            <div className="flex flex-row mt-6 items-center">
              <IoAddCircleOutline size={"1.4rem"} color="#4b5557" />
              <p className="pl-5 text-sm text-[#4b5557]">Add new Project</p>
            </div>
          </div>
        </div>
        <div className="px-3 bottom-[-135px] relative cursor-pointer">
          <div className="rounded-xl h-20 w-full user-bg shadow-2xl">
            <div className="flex flex-row p-5 w-full items-center  justify-between">
              <div className="flex items-center">
                <div className="avatar online w-10 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://richard.is-a.dev/images/richard.jpg"
                  />
                </div>
                <p className="text-white text-sm pl-4 plus-jakarta">
                  Richard Shaju
                  <br />
                  <p className="text-xs text-green-500">Premium</p>
                </p>
              </div>
              <IoSettingsOutline size={"1.4rem"} color="#4b5557"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
