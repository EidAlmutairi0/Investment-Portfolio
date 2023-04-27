import React from "react";
import { useNavigate } from "react-router-dom";
import appLogoWithText from "../assets/InvestmentPortfolioLogoWithText.png";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full  pt-3">
        <img
          onClick={() => navigate("/")}
          src={appLogoWithText}
          alt="sumz_logo"
          className="flex w-44 sm:w-56 self-center object-contain cursor-pointer"
        />
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="primary_btn font-bold text-sm sm:text-lg font-cairo"
        >
          تسجيل الدخول
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
