import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Registration from "./Pages/Registration";
import NavBar from "./components/navBar";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app" dir="rtl">
        <NavBar />
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/register" Component={Registration} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
