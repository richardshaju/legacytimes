import React from "react";
import { FiShare2 } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { VscFolderLibrary } from "react-icons/vsc";

import '../../App.css'
function TopBar() {
  return (
    <div className="w-full  py-4">
      <div className=" md:h-48 rounded-xl  bg-[#141313c8] ">
        <div className="h-[60%] p-8 flex flex-row  text-white plus-jakarta">
          <div className="flex flex-col w-[70%] ">
            <h3 className="text-3xl font-semibold pb-2">Orbital Oddysey</h3>
            <p className="text-gray-500">Marketing Campaign for a new TV series Launch </p>
          </div>
          <div className="flex w-[30%] flex-row justify-between align-middle items-center ">
            <div class="avatar-group -space-x-6 rtl:space-x-reverse">
              <div class="avatar border-[#141313] ">
                <div class="w-12">
                  <img src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" />
                </div>
              </div>
              <div class="avatar border-[#141313]">
                <div class="w-12">
                  <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                </div>
              </div>
              <div class="avatar border-[#141313]">
                <div class="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div class="avatar placeholder border-[#141313]">
                <div class="w-12 bg-neutral text-neutral-content">
                  <span>+5</span>
                </div>
              </div>
            </div>
            <p className="flex items-center text-[#4b5557] text-lg  cursor-pointer"><FiShare2 color="#4b5557"/>Share</p>
            <div className=" cursor-pointer h-10 w-10 rounded-lg flex items-center justify-center bg-slate-800">
            <BiEditAlt   size={"1.4rem"}/>
            </div>
          </div>
        </div>
        <hr style={{ width: '100%', borderColor: '#222222' }} />
        <div className="flex flex-row w-[30%] items-center justify-between p-6 ">
            <p className="flex flex-row w-[38%] justify-evenly text-green-500 items-center   cursor-pointer"><FiTriangle size={"1.4rem"} color="green" />Artificium</p>
            <p className="flex flex-row w-[28%] justify-evenly text-slate-400 items-center hover:text-[#737373]  cursor-pointer"><IoChatbubbleOutline />Chat</p>
            <p className="flex flex-row w-[38%] justify-evenly text-slate-400 items-center hover:text-[#737373] cursor-pointer"><VscFolderLibrary />Library</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
