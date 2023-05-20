import LogoutIcon from "@mui/icons-material/Logout";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import WalletIcon from "@mui/icons-material/Wallet";
import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";

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
      className=" relative shadow-lg bg-white"
      style={{
        width: "20%",
      }}
    >
      <div className=" h-[10%] flex flex-1 relative  ">
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
        <Box className="py-5 px-3 flex flex-col w-[100%]">
          <Item
            title="لوحة التحكم"
            to="/dashboard"
            index={0}
            icon={<SpaceDashboardIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="مكونات المحفظة"
            to="/wallet"
            index={1}
            icon={<WalletIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
        <div
          className="text-red-500 absolute bottom-10 w-[100%] px-5 font-cairo text-lg cursor-pointer  "
          onClick={() => props.setUser(false)}
        >
          <div className="flex flex-row items-center gap-3 bg-red-200 justify-center py-4 w-full rounded-xl">
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
        "flex  py-4  w-full px-5 hover:bg-none" +
        (selected == index
          ? " bg-[#d4e8fb] rounded-xl bg-opacity-100 text-primary"
          : "")
      }
      component={<Link />}
    >
      <div
        className={
          (selected == index ? "text-primary " : " text-gray-400") + " text-lg"
        }
      >
        {icon}
      </div>
      <div
        className={
          "flex ps-3" +
          (selected == index ? " text-primary font-bold" : " text-gray-400") +
          " text-lg"
        }
        style={{
          fontFamily: "Cairo",
          fontSize: "1rem",
        }}
      >
        {title}
      </div>
    </Link>
  );
};
export default SideBar;
