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
    <div className="w-full px-4">
      <TopBar />
      <div className="flex justify-center items-center content-center text-center pt-2">
        <div className="text-white plus-jakarta">
          <h2 className="font-bold text-2xl">Innovation Starter Pack</h2>
          <p>
            Kickstart your innovation process with our comprehensive selection
            of predefined prompts.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-evenly my-[5.7rem]">
        <div className="plus-jakarta justify-center flex items-center flex-col">
          <div className="plus-jakarta flex flex-row justify-evenly w-10 h-10 rounded-full text-green-600 bg-slate-800 items-center">
            <IoChatbubbleOutline />
          </div>
          <p className="text-white py-4">Creative Assets</p>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>UI&nbsp;Fireframe</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Brochure&nbsp; design</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Social&nbsp; media</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button  p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Brand&nbsp; guidelines</p>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="plus-jakarta justify-center flex items-center flex-col">
          <div className="plus-jakarta flex flex-row justify-evenly w-10 h-10 rounded-full text-blue-500 bg-slate-800 items-center">
          <FaCode />
          </div>
          <p className="text-white my-4">Developer Tools</p>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>API&nbsp; Integration</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Code &nbsp;review</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Test&nbsp; automation</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button  p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>DB&nbsp; optimization</p>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="plus-jakarta justify-center flex items-center flex-col">
          <div className="plus-jakarta flex flex-row justify-evenly w-10 h-10 rounded-full text-violet-700 bg-slate-800 items-center">
          <FaPencilAlt />

          </div>
          <p className="text-white py-4">Content Creation</p>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Product&nbsp; description</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>E-mail&nbsp; copy</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Whitepaper</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button  p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Press&nbsp; release</p>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="plus-jakarta justify-center flex items-center flex-col">
          <div className="plus-jakarta flex flex-row justify-evenly w-10 h-10 rounded-full text-yellow-400 bg-slate-800 items-center">
          <SlBulb />
          </div>
          <p className="text-white py-4">Idea Generation</p>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Hashtag&nbsp; ideas</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Brainstorming</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Trend&nbsp; analysis</p>
            <FaArrowRightLong />
          </div>
          <div className="h-10 flex flex-row items-center button  p-5 text-sm justify-between w-[13rem] mt-2 bg-slate-900 text-white rounded-lg">
            <p>Social&nbsp; media</p>
            <FaArrowRightLong />
          </div>
        </div>
        </div>
      </div>
      <InputBox/>
    </div>

  );
}

export default Main;
