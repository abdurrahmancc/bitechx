import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className="h-14">
      <div className="bg-[#242526] flex justify-center items-center">
        <img src={logo} className={"h-[52.23px] w-[158px]"} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
