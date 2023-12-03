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
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ms-16 md:ms-20 items-center gap-y-7 md:gap-y-36 ">
        <div className="flex gap-y-1 flex-col ">
          <h1 className="wrapper w-full sm:text-[29px] md:text-[30px] lg:text-[35px] flex justify-center sm:ms-6  md:justify-start text-[2rem] ">
            {language === "English" ? (
              <span className="typing-demo">Hi , I'm Fatemeh</span>
            ) : (
              <span className="typing-demo-per md:me-3   rtl-text">
                سلام ، من فاطمه هستم
              </span>
            )}
          </h1>
          <h2 className="w-full flex sm:ms-[0px] md:ms-6 text-[16px] sm:text-[19px] justify-center  md:justify-start  text-midGray ">
            {language === "English" ? (
              <span className="mb-2"> Frontend Developer</span>
            ) : (
              <span className="rtl-text md:me-14 mb-2">
                توسعه دهنده ی فرانت اند
              </span>
            )}
          </h2>

          {language === "English" ? (
            <>
              <p className="text-xs md:ms-4 ltr-text md:text-[11.6px] lg:text-[15px] md:text-base w-[336px] md:w-full hidden md:flex justify-center  md:justify-start">
                I was born in Tehran in 2000. In 2022, I obtained a bachelor's
                degree in <br /> Computer Engineering from South Tehran Azad
                University. Additionally <br /> in 2021, I completed a front-end
                course at Sematec Institute and <br /> received a certificate. I
                am passionate about creating digital projects <br /> that thrive
                on the internet. My expertise lies in developing outstanding{" "}
                <br /> websites and web applications that offer intuitive user
                experiences.
              </p>
              <p className="text-xs ms-6 ltr-text sm:text-[12px]  md:text-base w-[336px] md:hidden flex justify-center  md:justify-start">
                I was born in Tehran in 2000. In 2022, I obtained a bachelor's
                degree in Computer Engineering from South Tehran Azad
                University. Additionally, in 2021, I completed a front-end
                course <br /> at Sematec Institute and received a certificate. I
                am passionate about creating digital projects that thrive on the
                internet. My expertise lies in developing outstanding websites
                and web applications that offer intuitive user experiences.
              </p>
            </>
          ) : (
            <p className="text-xs rtl-text me-5 md:mx-0 md:text-base w-[336px] md:w-full flex justify-center  md:justify-start">
              من متولد سال ۱۳۷۹ در تهران هستم . دارای مدرک مهندسی نرم افزار{" "}
              <br />
              از دانشگاه آزاد واحد تهران جنوب در سال 1401 و همچنین مدرک <br />
              دوره ی فرانت اند از موسـسه ی سمـاتک در سال 1400 هستم .من <br />
              از برنامه نویسـی و ساخت وب اپلیکیشن ها لذت می برم و آماده ی <br />
              کسب تجربیات جدید هستم.
            </p>
          )}
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className="w-full flex justify-center"
        >
          <img
            className="w-[180px] cst-shadow md:w-72 sm:ms-32 md:ms-20 md:pt-5 "
            src="https://i.postimg.cc/y8fmvfTJ/fjIcon.png"
            alt=""
          />
        </div>
        <div className=" flex gap-x-1 items-center sm:mt-20 sm:mb-80 md:mb-0 animate-scroll">
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
