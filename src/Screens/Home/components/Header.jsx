import React from "react";
import logo from "../../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigation = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg">
      <button className="btn btn-primary btn-sm md:btn-md" onClick={()=>navigation('/new')}>+ New Ideas</button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
      <div>
        <img src={logo} className="w-10 h-10 rounded-full" />
        <h2 className="font-bold text-sm hidden md:block ">
          By <br></br>Mohd Hasan
        </h2>
        <div className="flex gap-2 item-center"></div>
      </div>
    </div>
  );
}

export default Header;
