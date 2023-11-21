import React, { useEffect } from "react";
import { LuArrowDown, LuMouse } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
const About = ({ setLanguage, language }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  //console.log(language);
  return (
    <section className="z-50 relative pt-44 md:pt-40  w-full flex ps-2 md:ps-0 md:justify-center  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-7 md:gap-y-36 ">
        <div className="flex gap-y-1 flex-col ">
          <h1 className="wrapper w-full flex justify-center  md:justify-start text-[2rem] md:text-[2.8rem] ">
            {language === "English" ? (
              <span className="typing-demo">Hi , I'm Fatemeh</span>
            ) : (
              <span className="typing-demo-per md:me-3 rtl-text">
                سلام ، من فاطمه هستم
              </span>
            )}
          </h1>
          <h2 className="w-full flex justify-center  md:justify-start  text-midGray text-[1.9rem]">
            {language === "English" ? (
              <span> Frontend Developer</span>
            ) : (
              <span className="rtl-text md:me-14">توسعه دهنده ی فرانت اند</span>
            )}
          </h2>

          {language === "English" ? (
            <p className="text-xs ms-6 ltr-text md:ms-0 md:text-base w-[336px] md:w-full flex justify-center  md:justify-start">
              I was born in 2000 in Tehran and I have bachelor's degree <br />
              in computer engineering from South Tehran Azad University <br />
              and I have the certificate of front end course from Sematec <br />
              Institute . I enjoy building things that live on the internet .
              <br />I develop exceptional websites and web apps that provide
              intuitive.
            </p>
          ) : (
            <p className="text-xs rtl-text me-3 md:ms-0 md:text-base w-[336px] md:w-full flex justify-center  md:justify-start">
              من متولد سال ۱۳۷۹ در تهران هستم . دارای مدرک مهندسی نرم افزار
              <br /> از دانشگاه آزاد واحد تهران جنوب و همچنین مدرک دوره ی فرانت
              اند <br /> از موسـسه ی سمـاتک هستم .من از برنامه نویسـی و ساخت وب
              <br /> اپلیکیشن ها لذت می برم و آماده ی کسب تجربیات جدید هستم.
            </p>
          )}
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className="w-full flex justify-center"
        >
          <img
            className="w-[180px] md:w-80 ms-5 md:ms-24 md:pt-5 "
            src="https://i.postimg.cc/y8fmvfTJ/fjIcon.png"
            alt=""
          />
        </div>
        <div className=" flex gap-x-1 items-center animate-scroll">
          <LuMouse className="text-6xl rotate-180" />
          {language === "English" ? (
            <p className="text-xl">Scroll Down</p>
          ) : (
            <p className="text-xl">به پایین بروید</p>
          )}
          <LuArrowDown className="text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default About;