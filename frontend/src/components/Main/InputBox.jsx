import React, { useState, useEffect } from "react";
import { BsFillSendFill } from "react-icons/bs";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";


function InputBox({userMessages,setUserMessages, aiMessages, setAiMessages}) {
  const [Text, setText] = useState("");
  const [GenerateLoading, setGenerateLoading] = useState(false);
  const auth = firebase.auth();
  const uid = auth?.currentUser?.uid; 
  const [user] = useAuthState(auth);

  async function OnSubmit() {
    if(user){
    setUserMessages([...userMessages, Text]);
    setAiMessages([...aiMessages, "loading"]);
    setText('')
    try {

      // :"https://legacytimes.onrender.com/generate"
      setGenerateLoading(true)
      const response = await fetch("https://legacytimes.onrender.com/generate"  , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, Text }), 
      });
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        console.log(responseData);
        setAiMessages(aiMessages.slice(0, -1))
        setAiMessages([...aiMessages, responseData.output]);
        setGenerateLoading(false)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }else{
    return
  }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      OnSubmit()
    }
  };
  return (
    <div className="w-full pb-4 bg-transparent">
      <div className=" h-[4.6rem] rounded-xl flex items-center justify-between bg-[#141313c8] ">
        <div className="h-[60%] p-8 w-full flex flex-row justify-between items-center text-white plus-jakarta">
          <input
            className="text-xs md:text-sm focus:border-transparent focus:outline-none border-2 border-solid border-transparent w-full h-7 bg-transparent"
            type="string"
            value={Text}
            placeholder="Type the keywords for the article"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyPress}
          />


          {GenerateLoading ? <span className="loading loading-spinner text-white"></span>:
          <button type="submit"
          disabled={!Text.length>0}
          onClick={() => OnSubmit()}
          className=" h-8 w-8 md:h-10 md:w-16 rounded-lg flex items-center justify-center hover:bg-slate-900 cursor-pointer bg-slate-800"
          >
            <BsFillSendFill />
          </button>
          }
        </div>
      </div>
    </div>
  );
}

export default InputBox;
