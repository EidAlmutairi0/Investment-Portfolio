import React from "react";
import mainImage from "../assets/main.png";

const Landing = () => {
  return (
    <section className=" relative w-full h-screen mx-auto flex flex-col sm:flex-row items-center text-start justify-center pb-10 px-5">
      <div className=" flex flex-1 justify-center  items-start flex-col h-full ">
        <h3 className="head_text font-cairo">تابع اداء استثماراتك</h3>
        <h2 className="desc font-cairo">
          منصتك الوحيدة لمتابعة اداء استثماراتك في مختلف الأسواق وتحقيق اهدافك
          المالية.
        </h2>
        <button className="primary_btn mt-5 font-bold text-sm sm:text-lg font-cairo">
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
