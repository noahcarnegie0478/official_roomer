import React from "react";
import { BsHouseAdd } from "react-icons/bs";
import { PiDeskFill } from "react-icons/pi";

function Sidebar({ setAllowToDraw }) {
  return (
    <div className="bg-white fixed z-1000 left-2 top-1   shadow-md rounded-lg flex flex-col items-center justify-center gap-3 p-2">
      <div className="to-draw h-10 w-10 inset-shadow-sm rounded-lg  flex items-center justify-center ">
        <BsHouseAdd
          className=" w-7 h-7 "
          onClick={() => setAllowToDraw(true)}
        />
      </div>
      <div className="furniture h-10 w-10 inset-shadow-sm rounded-lg flex items-center justify-center  ">
        <PiDeskFill className=" w-7 h-7 " />
      </div>
    </div>
  );
}

export default Sidebar;
