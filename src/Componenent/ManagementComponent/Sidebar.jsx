import React, { useState } from "react";
import { BsHouseAdd } from "react-icons/bs";
import { PiDeskFill } from "react-icons/pi";
import { mockData } from "../../data/mockData";
import MenuDisplay from "./MenuDisplay";

function Sidebar({ setAllowToDraw }) {
  const [open, setOpen] = useState(false);
  const [defaultData, setDefaultData] = useState(() => {
    if (mockData) return mockData;
    else return null;
  });

  return (
    <div className="bg-white fixed z-1000 left-2 top-1 shadow-md rounded-lg flex justify-start gap-2 ">
      <div className=" flex flex-col items-center justify-center gap-3 p-2  ">
        <div className="furniture h-10 w-10 inset-shadow-sm rounded-lg flex items-center justify-center hover:bg-gray-200 active:bg-gray-400 hover:text-white  ">
          <PiDeskFill className=" w-7 h-7  " onClick={() => setOpen(!open)} />
        </div>
        <div className="to-draw h-10 w-10 inset-shadow-sm rounded-lg  flex items-center justify-center hover:bg-gray-200 active:bg-gray-400 hover:text-white  ">
          <BsHouseAdd
            className=" w-7 h-7 "
            onClick={() => setAllowToDraw(true)}
          />
        </div>
      </div>

      {open ? (
        <div className="w-70  p-2 rounded-lg flex justify-start gap-2  ">
          <div className="w-5 h-auto border-l-1 border-gray-200 "></div>
          <MenuDisplay data={defaultData} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Sidebar;
