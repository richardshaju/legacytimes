import React, { useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
function InputBox() {
  const [text, settext] = useState("");
  const send = () => {
    document.getElementById('my_modal_1').showModal()
  };
  return (
    <div className="w-full  py-4">
      <div className=" md:h-[4.6rem] rounded-xl flex items-center justify-between bg-[#141313c8] ">
        <div className="h-[60%] p-8 w-full flex flex-row justify-between items-center text-white plus-jakarta">
          <FaMicrophone className="cursor-pointer" />
          <input
            className="text-sm focus:border-transparent focus:outline-none border-2 border-solid border-transparent w-[65rem] h-7 bg-transparent"
            type="string"
            placeholder="You can ask me anything! I am here to help."
            onChange={(e) => settext(e.target.value)}
          />
          <MdOutlineAttachFile className=" cursor-pointer" />
          <div onClick={() => send()}  className="h-10 w-10 rounded-lg flex items-center justify-center hover:bg-slate-900 cursor-pointer bg-slate-800">
            <BsFillSendFill />
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-danger">Internal sever error</h3>
          <p class="py-4">Server Error for finding "{text}"</p>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default InputBox;
