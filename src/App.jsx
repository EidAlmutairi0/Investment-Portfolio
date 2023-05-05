import { useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

import "./App.css";

import Landing from "./Pages/Landing";
import Registration from "./Pages/Registration";
import SideBar from "./components/SideBar";
import NavBar from "./components/navBar";
function App() {
  const [user, setUser] = useState(true);

  return (
    <BrowserRouter>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app" dir="rtl">
        {!user ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" Component={Landing} />
              <Route path="*" Component={Landing} />
              <Route path="/register" exact Component={Registration} />
            </Routes>
          </>
        ) : (
          <div className="flex w-screen ">
            <ProSidebarProvider>
              <SideBar setUser={setUser} />
            </ProSidebarProvider>

            <div className="flex  h-screen w-full p-10 bg-[#f9fbfe]">
              <Routes>
                <Route path="/dashboard" exact Component={Dashboard} />
                <Route path="*" Component={Dashboard} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
