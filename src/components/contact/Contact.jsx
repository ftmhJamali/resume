import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { LuHeart, LuMessagesSquare } from "react-icons/lu";
const Contact = ({ setLanguage, language }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72gthb5",
        "template_9osxm5s",
        form.current,
        "VlnvnlxVs1GCcqtYE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section
      data-aos="fade-up"
      className="text-header ms-2 md:ms-28 flex flex-col  md:mt-40"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`flex flex-col ${
          language === "English" ? null : "rtl-text"
        } gap-y-4 p-3 w-72 h-[370px] mt-12 md:w-[600px] md:h-[300px] bg-primary rounded-lg shadow-custom-form`}
      >
        <h2 className="text-lg text-white font-semibold md:ms-6">
          {language === "English" ? (
            <span>Contact with me</span>
          ) : (
            <span>ارتباط با من</span>
          )}
        </h2>
        <div className="flex flex-col gap-y-4 md:flex-row w-full justify-center gap-x-6">
          <input
            placeholder={language === "English" ? "name ..." : "نام ..."}
            name="user_name"
            className="md:w-40 p-2 bg-transparent border-2 text-white border-solid border-white focus:outline-none rounded-md shadow-custom"
            type="text"
          />
          <input
            placeholder={language === "English" ? "email ..." : "ایمیل ..."}
            name="user_email"
            className="md:w-40 p-2 bg-transparent border-2 text-white border-solid border-white focus:outline-none rounded-md shadow-custom"
            type="email"
          />
          <input
            placeholder={language === "English" ? "subject ..." : "موضوع ..."}
            name="subject"
            className="md:w-40 p-2 bg-transparent border-2 text-white border-solid border-white focus:outline-none rounded-md shadow-custom"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row gap-x-6 h-full items-center pb-4">
          <textarea
            name="message"
            placeholder={
              language === "English" ? "your message ..." : "پیام شما ..."
            }
            className="resize-none w-full md:w-[342px]  md:h-full md:ms-6 p-2 bg-transparent border-2 text-white border-solid border-white focus:outline-none rounded-md shadow-custom"
            type="text"
          />
          <button
            type="submit "
            className="flex group px-6 py-1 border-2 border-solid border-white text-white justify-center items-center  bg-transparent font-semibold hover:tracking-widest rounded-lg hover:bg-white hover:text-primary transition-all"
          >
            {language === "English" ? <span>send</span> : <span>ارسال</span>}
            <LuMessagesSquare className="hidden group-hover:block transition-all animate-ping" />
          </button>
        </div>
      </form>
      <h3 className="md:text-base items-center text-gray-600 gap-x-1 mt-2 font-semibold text-sm flex justify-center w-72 md:w-[600px]">
        <span>coded with </span>
        <LuHeart className="text-primary" />
        <span>by</span>
        <a href="/" className="underline cursor-pointer">
          Ftmh jamali
        </a>
      </h3>
    </section>
  );
};

export default Contact;
