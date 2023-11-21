import React, { useState } from "react";
import "./Drawer.css";
import Language from "../language/Language";
const Drawer = ({ isOpen, setLanguage, language }) => {
  const [platte, setPlatte] = useState("primary"),
    setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
    },
    setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light");
    },
    setBlueMode = () => {
      document.querySelector("body").setAttribute("platte-theme", "blue");
    },
    setPinkMode = () => {
      document.querySelector("body").setAttribute("platte-theme", "pink");
    },
    setGrayMode = () => {
      document.querySelector("body").setAttribute("platte-theme", "gray");
    },
    setPurpleMode = () => {
      document.querySelector("body").setAttribute("platte-theme", "purple");
    },
    toggleTheme = (e) => {
      if (e.target.checked) {
        setDarkMode();
        setPlatte("primary");
      } else {
        setLightMode();
      }
    },
    setColor = () => {
      if (platte === "blue") {
        setBlueMode();
      }
      if (platte === "gray") {
        setGrayMode();
      }
      if (platte === "primary") {
        setPurpleMode();
      }
      if (platte === "pink") {
        setPinkMode();
      }
    };

  return (
    <div className={`${isOpen ? "active" : null} drawer `}>
      <div className="flex flex-col gap-y-4 ms-4">
        <h3 className="text-gray-400 text-2xl mb-7">
          {language === "English" ? (
            <span>Settings</span>
          ) : (
            <span className="rtl-text">تنظیمات</span>
          )}
        </h3>
        <p className=" text-base text-gray-400 ">
          {language === "English" ? (
            <span>Color Platte (2 click)</span>
          ) : (
            <span className="rtl-text">پالت رنگی </span>
          )}
        </p>
        <div className="flex gap-x-6">
          <button
            onClick={() => {
              setPlatte("blue");
              setColor();
            }}
            className={`w-5 h-5 rounded-full bg-bluePlatte ${
              platte === "blue"
                ? " border-[3px]  border-solid border-red-900"
                : null
            }`}
          ></button>
          <button
            onClick={() => {
              setPlatte("gray");
              setColor();
            }}
            className={`w-5 h-5 rounded-full bg-grayPlatte ${
              platte === "gray"
                ? " border-[3px] border-solid border-red-900"
                : null
            }`}
          ></button>
          <button
            onClick={() => {
              setPlatte("primary");
              setColor();
            }}
            className={`transition-all w-5 h-5 rounded-full bg-[color:#8739fa] ${
              platte === "primary"
                ? " border-[3px]  border-solid border-red-900"
                : null
            }`}
          ></button>
          <button
            onClick={() => {
              setPlatte("pink");
              setColor();
            }}
            className={`transition-all w-5 h-5 rounded-full bg-pinkPlatte ${
              platte === "pink"
                ? " border-[3px] border-solid border-red-900"
                : null
            }`}
          ></button>
        </div>
        <p className=" text-base text-gray-400  mt-9">
          {language === "English" ? (
            <span>Dark Mode</span>
          ) : (
            <span className="rtl-text">حالت شب</span>
          )}
        </p>
        <input
          onChange={(e) => toggleTheme(e)}
          type="checkbox"
          className="sr-only cursor-pointer"
          id="darkmode-toggle"
        />
        <label for="darkmode-toggle" className="toggle">
          <span>Toggle dark mode</span>
        </label>
        <p className=" text-base text-gray-400 mt-9">
          {language === "English" ? (
            <span>Language</span>
          ) : (
            <span className="rtl-text"> زبان</span>
          )}
        </p>
        <Language language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
};

export default Drawer;
