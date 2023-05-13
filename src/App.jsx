import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { ColorModeContext, useMode } from "./theme";

import "./App.css";

import { ThemeProvider } from "@mui/material";
import Landing from "./Pages/Landing";
import Registration from "./Pages/Registration";
import Wallet from "./Pages/Wallet";
import SideBar from "./components/SideBar";
import NavBar from "./components/navBar";
function App() {
  const [user, setUser] = useState(true);
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app" dir="rtl">
            {!user ? (
              <div className="app" dir="rtl">
                <NavBar />
                <Routes>
                  <Route path="/" Component={Landing} />
                  <Route path="*" Component={Landing} />
                  <Route path="/register" exact Component={Registration} />
                </Routes>
              </div>
            ) : (
              <div className="flex w-screen h-screen overflow-hidden ">
                <SideBar setUser={setUser} />

                <div className="flex  h-screen w-full overflow-scroll ">
                  <Routes>
                    <Route path="/dashboard" exact Component={Dashboard} />
                    <Route path="/wallet" exact Component={Wallet} />

                    <Route path="*" Component={Dashboard} />
                  </Routes>
                </div>
              </div>
            )}
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
