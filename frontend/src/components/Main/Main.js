import React, { useEffect } from "react";
import InputBox from "./InputBox";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseApp from "../../firebase";

import firebase from "firebase/compat/app";
import { MdContentCopy } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdDownloadDone } from "react-icons/md";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { useRef } from "react";
import GoogleSignInButton from "../googleButton";

const auth = firebaseApp.auth();

async function SignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  const { uid, displayName, photoURL, email } = auth?.currentUser;

  try {
    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, displayName, photoURL, email }), // Replace this with your data
    });
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}

function Main() {
  const [userMessages, setUserMessages] = useState([]);
  const [aiMessages, setAiMessages] = useState([]);
  const [isCopiedIndexes, setisCopiedIndexes] = useState([]);
  const [user] = useAuthState(auth);
  const dummy = useRef();
  useEffect(() => {
    const fetchMessages = async () => {
      if (user) {
        const userid = user.uid;
        try {
          const response = await fetch("http://localhost:5000/getmessages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userid }),
          });
          if (response.ok) {
            const responseData = await response.json(); // Parse response JSON
            console.log(responseData);
            setUserMessages(responseData.userMessages);
            setAiMessages(responseData.aiMessages);
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      } else {
        return;
      }
    };

    fetchMessages();
  }, [user]);

  const handleCopy = async (data, index) => {
    await navigator.clipboard.writeText(data);

    if (isCopiedIndexes.includes(index)) {
      setisCopiedIndexes(isCopiedIndexes.filter((i) => i !== index));
    } else {
      setisCopiedIndexes([...isCopiedIndexes, index]);
    }
  };

  const handleScroll = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full px-4 flex items-center flex-col ">
      <div className="w-[100%] sm:w-[70%] md:w-[50%] h-full flex flex-col justify-between">
        {!user ? (
          <div className="flex justify-center items-center content-center text-center text-sm md:text-md">
            <div className="text-white plus-jakarta mt-[10rem] flex flex-col gap-3">
              Please sign in to use the tool
              <div onClick={SignIn}>
                <GoogleSignInButton />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white h-[31rem]  text-3xl overflow-hidden relative">
            <div className="h-full overflow-y-auto overflow-x-hidden md:right-[-17px] right-[-1px] absolute top-0 bottom-0 left-0  pt-3 pb-3">
              {userMessages &&
                userMessages.map((userMsg, index) => {
                  const isCopied = isCopiedIndexes.includes(index);
                  return (
                    <div key={index}>
                      {/* Display user message */}
                      <div className="flex justify-end urbanist">
                        <div className="flex flex-col w-fit items-end">
                          <div className="flex gap-3 items-center">
                            <p className="md:text-[18px] text-[14px]  font-semibold urbanist ">
                              {user?.displayName}
                            </p>
                            <div className="avatar">
                              <div className="md:w-8 md:h-8 w-5 h-5 rounded-full ">
                                <img src={user?.photoURL} alt="icon" />
                              </div>
                            </div>
                          </div>
                          <p className="md:text-[16px] text-[12px] bg-[#141414] rounded-xl p-2 md:p-3 w-fit">
                            {userMsg}
                          </p>
                        </div>
                      </div>
                      <div className="flex urbanist">
                        <div className="flex flex-col w-fit">
                          <div className="flex gap-3 items-center">
                            <img
                              className="rounded-full md:w-8 md:h-8 w-5 h-5"
                              src={require("../../logo.jpg")}
                            />
                            <p className="md:text-[18px] text-[14px]  font-semibold urbanist">
                              LT Generator
                            </p>
                          </div>
                          <span className="bg-[#141414] md:text-[16px] text-[12px] rounded-xl md:p-5 p-3 cursor-pointer  w-fit">
                            <p className="flex items-center gap-3 ">
                              Generated{" "}
                              {isCopied ? (
                                <MdDownloadDone />
                              ) : (
                                <MdContentCopy
                                  onClick={() =>
                                    handleCopy(aiMessages[index], index)
                                  }
                                />
                              )}
                            </p>
                            Legacy Times: {userMsg}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div ref={dummy}></div>
            </div>
          </div>
        )}
        <InputBox
          userMessages={userMessages}
          setUserMessages={setUserMessages}
          aiMessages={aiMessages}
          setAiMessages={setAiMessages}
          scroll={handleScroll}
        />
      </div>
    </div>
  );
}

export default Main;