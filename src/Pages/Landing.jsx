import React from "react";
import { useNavigate } from "react-router-dom";
import mainImage from "../assets/main.png";

("../assets//");
const Landing = () => {
  const navigate = useNavigate();

  return (
    <section className=" top-0 -z-10 absolute pt-10 w-full h-screen mx-auto flex flex-col sm:flex-row items-center text-start justify-center  px-5">
      <div className=" flex flex-1 justify-center  items-start flex-col h-full ">
        <h3 className="head_text font-ibmsans">تابع اداء محفظتك</h3>
        <h2 className="desc font-ibmsans">
          منصتك الوحيدة لمتابعة اداء استثماراتك في مختلف الأسواق لتحقيق اهدافك
          المالية.
        </h2>
        <button
          className="primary_btn mt-5  text-sm sm:text-lg font-ibmsans"
          onClick={() => navigate("/register")}
        >
          ابدأ الأن
        </button>
      </div>
      <div className=" h-full w-full flex flex-1  items-center justify-center">
        <img className="object-contain" src={mainImage} />
      </div>
    </section>
  );
};

export default Landing;
