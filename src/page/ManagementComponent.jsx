import React from "react";
import Sidebar from "../Componenent/ManagementComponent/Sidebar";

function ManagementComponent({ setAllowToDraw }) {
  return (
    <div>
      <Sidebar setAllowToDraw={setAllowToDraw} />
    </div>
  );
}

export default ManagementComponent;
