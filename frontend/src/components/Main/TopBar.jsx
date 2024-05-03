import React,{useState} from "react";
import { BiEditAlt } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { VscFolderLibrary } from "react-icons/vsc";
import { Outlet, Link } from "react-router-dom";
import { PiSignOutBold } from "react-icons/pi";
import firebaseApp from "../../firebase";
import "../../App.css";
import { useAuthState } from "react-firebase-hooks/auth";

function TopBar({page}) {
  const auth = firebaseApp.auth();
  function SignOut() {
    auth.signOut();
  }
  const [user] = useAuthState(auth);

  return (
    <div className="w-full  px-4 pt-4 ">
      <div className="md:h-32 rounded-xl  bg-[#141313c8] ">
        <div className="h-[60%] w-full px-4 py-2 flex flex-row justify-between  text-white plus-jakarta">
          <div className="flex flex-col">
            <h3 className="text-lg md:text-2xl font-medium urbanist pb-1">
              Legacy Times Generator
            </h3>
            <p className="text-gray-500 urbanist text-[10px] md:text-[14px] ">
              Create Legacy TImes within seconds
            </p>
          </div>
          <div className="md:right-5 right-0 text-md md:text-xl relative items-center flex justify-center cursor-pointer text-white">
            {user ? <PiSignOutBold  onClick={() => SignOut()} /> : null}
          </div>
        </div>

        <hr style={{ width: "100%", borderColor: "#222222" }} />
        <div className="flex flex-row items-center gap-10 md:px-4 md:p-2 p-3">
          <Link
            to="/"
            className={`flex flex-row text-sm md:text-[17px] justify-evenly  ${page == 'generate' ? 'text-green-500' : 'text-slate-500'} hover:text-green-500  items-center gap-2  cursor-pointer`}
          >
            <FiTriangle color="green" />
            Generate
          </Link>
          <Link
            to="/library"
            className={`flex flex-row text-sm md:text-[17px] justify-evenly ${page == 'library' ? 'text-blue-500' : 'text-slate-500'} hover:text-blue-500 items-center gap-2  cursor-pointer`}
          >
            <VscFolderLibrary />
            Library
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
