import React, { useEffect } from "react";
import InputBox from "./InputBox";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseApp from "../../firebase";

import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useRef } from "react";
import GoogleSignInButton from "../googleButton";
import { FaWhatsapp } from "react-icons/fa";

const auth = firebaseApp.auth();

async function SignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  const { uid, displayName, photoURL, email } = auth?.currentUser;

  try {
    const response = await fetch("https://legacytimes.onrender.com/signin", {
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
  const [loading, setLoading] = useState();
  const [user] = useAuthState(auth);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when the component mounts
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [aiMessages]);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      if (user) {
        const userid = user.uid;
        try {
          const response = await fetch(
            "https://legacytimes.onrender.com/getmessages",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userid }),
            }
          );
          if (response.ok) {
            const responseData = await response.json();
            setUserMessages(responseData.userMessages);
            setAiMessages(responseData.aiMessages);
            setLoading(false);
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

  return (
    <div className="w-full h-screen md:h-full px-4 flex items-center flex-col ">
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
          <>
            {loading || userMessages.length == 0 ? (
              <div className="mt-60 justify-center items-center flex flex-col text-white">
                <span className="loading loading-ball loading-md md:loading-lg "></span> 
                Loading...
              </div>
            ) : (
              <div className="text-white h-[31rem]  text-3xl overflow-hidden relative">
                {userMessages.length === 0 && (
                  <div className="flex justify-center items-center content-center text-center text-sm md:text-md">
                    <div className="text-white plus-jakarta mt-[10rem] flex flex-col gap-3">
                      <p className="md:text-2xl urbanist text-xl">
                        Generate{" "}
                        <span className="text-[#FAEF60]">Legacy Times</span>
                        <br />
                        <p className="md:text-xl text-lg">
                          Enter keyword to generate. Eg: Wordtune ai tool
                          <p className="md:text-lg text-sm">
                            PS: Regenrate by adding more related keywords if
                            desired result is not obtained
                          </p>
                        </p>
                      </p>
                    </div>
                  </div>
                )}
                <div
                  ref={chatContainerRef}
                  className="h-full overflow-y-auto overflow-x-hidden right-[-17px]  absolute top-0 bottom-0 left-0 pr-4 py-3 "
                >
                  {userMessages &&
                    userMessages.map((userMsg, index) => {
                      return (
                        <div key={index}>
                          {/* Display user message */}
                          <div className="flex justify-end urbanist ">
                            <div className="flex flex-col items-end w-[80%]">
                              <div className="flex gap-3 items-center">
                                <p className="md:text-[18px] text-[14px]  font-semibold urbanist ">
                                  {user?.displayName}
                                </p>
                                <div className="avatar">
                                  <div className="md:w-8 md:h-8 w-5 h-5 rounded-full md:mr-0 mr-3">
                                    <img src={user?.photoURL} alt="icon" />
                                  </div>
                                </div>
                              </div>
                              <p className="md:text-[16px] text-[12px] bg-[#141414] rounded-xl p-2 md:p-3">
                                {userMsg}
                              </p>
                            </div>
                          </div>
                          <div className="flex urbanist w-[80%]">
                            <div className="flex flex-col">
                              <div className="flex gap-3 items-center">
                                <img
                                  className="rounded-full md:w-8 md:h-8 w-5 h-5"
                                  src={require("../../logo.jpg")}
                                />
                                <p className="md:text-[18px] text-[14px]  font-semibold urbanist">
                                  LT Generator
                                </p>
                              </div>

                              <span className="bg-[#141414] md:text-[16px] text-[12px]  rounded-xl md:p-5 p-3">
                                <p
                                  className={`flex items-center flex-col  gap-3 ${
                                    aiMessages[index] == "loading"
                                      ? "animate-pulse"
                                      : ""
                                  }`}
                                >
                                  {aiMessages[index] == "loading" ? (
                                    <p>
                                      Your Legacy Times is Generating.... <br />
                                      CREATE. SUSTAIN. THRIVE.
                                    </p>
                                  ) : (
                                    "Your Legacy Times is Generated"
                                  )}
                                  {aiMessages[index] == "loading" ? null : (
                                    <a
                                      href={`whatsapp://send?text=${encodeURIComponent(
                                        aiMessages[index]
                                      )}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center cursor-pointer px-2 bg-[#232323] hover:bg-[#23232370] rounded-lg"
                                    >
                                      Share on Whatsapp &nbsp; <FaWhatsapp />
                                    </a>
                                  )}
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </>
        )}
        <InputBox
          userMessages={userMessages}
          setUserMessages={setUserMessages}
          aiMessages={aiMessages}
          setAiMessages={setAiMessages}
        />
      </div>
    </div>
  );
}

export default Main;
