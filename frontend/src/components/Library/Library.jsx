import React, { useEffect, useState } from "react";
import TopBar from "../Main/TopBar";
import { getLegacyTimes } from "../../utils/getMessages";

function Library() {
  const [legacyTimes, setLegacyTimes] = useState();
  const [searchQuery, setSearchQuery] = useState('');


  const filteredTimes = legacyTimes?.filter(data => {
    return data[1].toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    getLegacyTimes()
      .then((result) => {
        setLegacyTimes(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-[50rem] w-full flex flex-col bg-[#1f1f24] text-white items-center ">
      <TopBar page={"library"} />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="text-xs md:text-sm my-7 focus:border-gray-900 focus:outline-none border-2 border-solid border-gray-700  rounded-md md:h-10 h-8 md:w-60 p-4 bg-transparent"

      />
      <div className="md:w-[70%]  justify-center flex plus-jakarta mb-5">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-5 sm:gap-3 gap-2 px-5">
          {filteredTimes ?.map((data, idx) => (
            <div className="min-w-32 h-30 p-2 rounded-lg bg-[#161515] hover:bg-[#1615158f]">
              <p className="md:text-xl sm:text-lg text-sm">{data[1] == '' ? "Will be updated": data[1]}</p>
              <p className="md:text-sm sm:text-[12px] text-[10px]">Issue: {data[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
