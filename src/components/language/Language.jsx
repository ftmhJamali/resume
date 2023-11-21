import React, { useState } from "react";

const Language = ({ setLanguage, language }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex w-full flex-col">
      <input
        onClick={() => setOpen(!open)}
        className="text-sm text-gray-500 px-2 py-[5px] border border-solid bg-transparent relative border-gray-400 rounded-lg w-[66px] focus:outline-none"
        type="text"
        name=""
        id=""
        value={language}
        readOnly
      />
      <div
        className={`${
          open
            ? "w-[66px] h-14 text-gray-500 text-sm border border-solid border-gray-400 bg-transparent  grid grid-cols-1  transition-all rounded-lg absolute mt-9"
            : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setLanguage("English");
            setOpen(false);
          }}
          className="hover:bg-primary hover:text-white rounded-t-lg"
        >
          English
        </button>
        <button
          onClick={() => {
            setLanguage("Persian");
            setOpen(false);
          }}
          className="hover:bg-primary hover:text-white rounded-b-lg"
        >
          Persian
        </button>
      </div>
    </section>
  );
};

export default Language;
