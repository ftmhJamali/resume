import React, { useEffect, useRef, useState } from "react";
import { LuGithub, LuMail, LuPhone, LuSettings } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import "./Header.css";
import Drawer from "../drawer/Drawer";
const Header = ({ setLanguage, language }) => {
  const [bgShow, setBgShow] = useState(false),
    navBarRef = useRef(),
    bgRevealer = () => {
      if (window.pageYOffset >= 100) {
        setBgShow(true);
      } else {
        setBgShow(false);
      }
    },
    [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", bgRevealer);
    return () => window.removeEventListener("scroll", bgRevealer);
  }, []);

  useEffect(() => {
    const handelClick = (e) => {
      if (!navBarRef.current.contains(e.target)) {
        setIsOpen(false);
        //console.log(isOpen);
      }
    };
    document.body.addEventListener("click", handelClick);
    return () => {
      document.body.addEventListener("click", handelClick);
    };
  }, []);
  return (
    <div
      className={` fixed  justify-between sm:px-12 z-[100] px-7  items-center md:gap-x-64 font-bold top-0 text-[1.3rem] flex flex-row md:justify-center h-[6rem] w-full py-[1rem] text-white ${
        bgShow ? "navBar" : ""
      }`}
    >
      <a className="flex cursor-pointer">
        <div className="z-40 front">frontend</div>
        <div className="relative flex items-center">
          <p className="z-40 ps-[1.3px] ">ftmh</p>
          <div className="bg-primary w-[46px] h-[46px] rounded-2xl md:left-[2px] left-[0.5px] mt-1 rotate-45 absolute"></div>
        </div>
      </a>
      <div className="flex gap-x-6 items-center">
        <a href="tel:+989127061061">
          <LuPhone className="text-[1.68rem] md:text-[2rem] hover:text-primary hover:cursor-pointer" />
        </a>
        <a href="https://github.com/ftmhJamali">
          <LuGithub className="text-[1.68rem] md:text-[2rem] hover:text-primary hover:cursor-pointer" />
        </a>
        <ButtonMailto
          className="cursor-pointer"
          mailto="mailto:fatemehjamali7061@gmail.com"
        >
          <LuMail className="text-[1.68rem]  md:text-[2rem] hover:text-primary hover:cursor-pointer" />
        </ButtonMailto>
      </div>
      <div ref={navBarRef} onClick={() => setIsOpen(true)}>
        <LuSettings className="text-[1.68rem] md:text-[2rem] hover:text-primary hover:cursor-pointer" />
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={() => setIsOpen(false)}
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </div>
  );
};

export default Header;

const ButtonMailto = ({ mailto, children }) => {
  return (
    <a
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </a>
  );
};
