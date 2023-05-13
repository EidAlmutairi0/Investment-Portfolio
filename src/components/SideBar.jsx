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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <div
      className=" relative shadow-lg bg-white"
      style={{
        width: "20%",
      }}
    >
      <div>
        <img
          src={appLogoWithText}
          alt="logo"
          className="p-10 py-10  flex cursor-pointer"
          onClick={() => {
            navigate("/");
            setSelected(0);
          }}
        />

        <Box className="py-5">
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
      </div>
      <div
        className="text-red-500 absolute bottom-10 left-1 w-[100%] text-center font-cairo text-lg cursor-pointer"
        onClick={() => props.setUser(false)}
      >
        تسجيل الخروج
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
        "flex  py-3 mx-3 px-5 hover:bg-none" +
        (selected == index ? " bg-primary rounded-xl bg-opacity-100" : "")
      }
      component={<Link />}
    >
      <div
        className={
          (selected == index ? "text-white" : " text-gray-500") + " text-lg"
        }
      >
        {icon}
      </div>
      <div
        className={
          "flex ps-2" +
          (selected == index ? " text-white" : " text-gray-500") +
          " text-lg"
        }
        style={{
          fontFamily: "Cairo",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
    </Link>
  );
};
export default SideBar;
