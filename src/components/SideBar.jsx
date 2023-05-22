import LogoutIcon from "@mui/icons-material/Logout";
import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import { BsGrid, BsGridFill } from "react-icons/bs";
import { IoWallet, IoWalletOutline } from "react-icons/io5";

import appLogoWithText from "../assets/InvestmentPortfolioLogoWithText.png";
import { tokens } from "../theme";

import { Link, useNavigate } from "react-router-dom";
const SideBar = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(0);
  return (
    <div
      className=" relative pt-6 shadow-lg bg-white"
      style={{
        width: "20%",
      }}
    >
      <div className=" h-[10%]  flex flex-1 relative  ">
        <img
          src={appLogoWithText}
          alt="logo"
          className="flex cursor-pointer flex-1 object-contain p-5  "
          onClick={() => {
            navigate("/");
            setSelected(0);
          }}
        />
      </div>
      <div className="w-[100%] relative flex flex-1  h-[90%] ">
        <Box className="flex flex-col w-[100%]">
          <Item
            title="لوحة التحكم"
            to="/dashboard"
            index={0}
            icon={selected ? <BsGrid /> : <BsGridFill />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="مكونات المحفظة"
            to="/wallet"
            index={1}
            icon={selected ? <IoWallet /> : <IoWalletOutline />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
        <div
          className="text-red-500 absolute bottom-10 w-[100%] px-5 font-ibmsans text-lg cursor-pointer  "
          onClick={() => props.setUser(false)}
        >
          <div className="flex flex-row items-center gap-3 justify-center py-4 w-full rounded-xl">
            <LogoutIcon />
            <div>تسجيل الخروج</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({ title, to, icon, selected, setSelected, index }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link
      to={to}
      onClick={() => setSelected(index)}
      className={
        "flex relative py-4 items-center  w-full  " +
        (selected == index ? "  text-primary" : "")
      }
      component={<Link />}
    >
      {selected == index && (
        <div className="w-1 bg-primary rounded-s-2xl flex h-[60%] absolute end-0"></div>
      )}
      <div className="px-5 flex flex-row">
        <div
          className={
            " flex justify-center items-center" +
            (selected == index ? " text-primary " : " text-gray-400") +
            " text-md"
          }
        >
          {icon}
        </div>
        <div
          className={
            "flex ps-2 " +
            (selected == index ? " text-primary font-bold" : " text-gray-400") +
            " text-md font-ibmsans  justify-center items-center"
          }
        >
          {title}
        </div>
      </div>
    </Link>
  );
};
export default SideBar;
