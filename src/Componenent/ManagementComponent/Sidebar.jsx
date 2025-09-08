import React from "react";

function Sidebar({ setAllowToDraw }) {
  return (
    <div className="h-screen w-20 bg-white absolute z-1000">
      {/*
    co 1 cai list hien thi category 
    */}
      <div className="category w-4/5 h-20 p-2 bg-white rounded-sm border ">
        <p onClick={() => setAllowToDraw(true)}>draw room</p>
      </div>
      {/*
    an vao category thi cai trang se expand ra 1 vung chua, 

    */}
      {/*
    trong vung chua do chua cac cai san pham lien quan den category

    */}
    </div>
  );
}

export default Sidebar;
