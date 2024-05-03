import React from "react";
import TopBar from "../Main/TopBar";

function Library() {
  return (
    <div className="h-screen w-full flex flex-col bg-[#1f1f24] text-white items-center">
      <TopBar page={"library"} />
      <div className="w-[50%]  justify-center flex">
        <div className="overflow-x-auto ">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>Issue</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>1</td>
                <td>Cy Ganderton</td>

              </tr>
              {/* row 2 */}
              <tr>
                <td>2</td>
                <td>Hart Hagerty</td>

              </tr>
              {/* row 3 */}
              <tr>
                <td>3</td>
                <td>Brice Swyre</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Library;
