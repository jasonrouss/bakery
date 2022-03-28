import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <>
      <header className="bg-gray-50 h-[150px]">
        <div className="flex justify-between mx-4 ">
          <div className="logo py-6">
            <img src={logo} alt="logo" width="120px" />
          </div>
          <div className="links flex justify-center py-12">
            <div className="home text-sky-600 text-xl mx-2">
              <a href="/">Home</a>
            </div>
            <div className="about text-sky-600 text-xl mx-2">
              <a href="/about">About</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
