import React, { useEffect } from "react";
import AOS from "aos";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import "swiper/css";
import { LuArrowRight } from "react-icons/lu";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Contact from "../contact/Contact";
const Projects = ({ setLanguage, language }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative  md:pt-64 h-[1660px]  w-screen overflow-hidden">
      <div className="absolute z-40 w-[2700px]  h-[2700px] -left-48 rounded-[1200px] sm:rounded-[1200px]  md:rounded-[770px] rotate-45 bg-projectBg"></div>
      <div className="z-[60] w-full  mt-20 flex flex-col gap-y-16  top-64 md:top-48 ">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-white md:ms-56 mt-36 md:mt-0 ms-7 text-3xl w-40"
        >
          {language === "English" ? (
            <span>Projects</span>
          ) : (
            <span>پروژه ها</span>
          )}
        </h2>
        <div className="z-[70] md:ms-56 h-[500px] ms-10 md:w-[868px] md:h-[300px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide className="h-full">
              <div className="flex flex-col sm:flex-row md:flex-col  lg:flex-row sm:gap-x-4 md:gap-x-14 lg:gap-x-10 xl:gap-x-32 gap-y-3 w-full h-[430px] md:h-64">
                <img
                  className="rounded-xl shadow-lg w-[300px] md:w-[390px] h-[246px]"
                  src="https://i.postimg.cc/76bQ6wRx/versalico-img.png"
                  alt=""
                />
                <div className="flex flex-col items-center w-[320px] md:w-full md:items-start gap-3 ">
                  <h2 className="text-header text-xl font-semibold">
                    {language === "English" ? (
                      <span className="shadow-txt">versaliko shop </span>
                    ) : (
                      <span className="rtl-text shadow-txt">
                        {" "}
                        فروشگاه ورسالیکو
                      </span>
                    )}
                  </h2>
                  <p
                    className={`text-midGray text-center pt-3 ${
                      language === "English" ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {language === "English" ? (
                      <span>
                        A web application for buying clothes and accessories
                        related to style . Prepared in the code mavericks
                        programming group
                      </span>
                    ) : (
                      <span className="rtl-text w-full 	text-right">
                        یک اپلیکیشن تحت وب برای خرید لباس <br />و اکـســسوری های
                        مـرتـبط با اسـتــایل <br /> تهــیه شـده در گـروه
                        برنــامه نویــســی <br />
                        کد ماوریکس
                      </span>
                    )}
                  </p>
                  <div className="flex flex-col w-full ms-44 justify-start sm:ms-20 mt-4 md:ms-0 lg:ms-0 xl:ms-0 sm:flex-col md:flex-row lg:flex-col gap-x-32 gap-y-5 md:my-7 ">
                    <div className="flex gap-x-3  text-sm">
                      <div className="w-14 bg-midGray h-[22px] items-center flex justify-center rounded-2xl text-white">
                        Next
                      </div>
                      <div className="w-16 bg-midGray h-[22px] flex justify-center rounded-2xl text-white ">
                        css
                      </div>
                    </div>
                    <a
                      href="https://www.versalikoshop.com/"
                      className="bg-primary ms-8 sm:ms-0 font-semibold w-20 h-8 rounded-md flex justify-center text-white  items-center gap-x-1"
                    >
                      <p className="">
                        {language === "English" ? (
                          <span>Demo</span>
                        ) : (
                          <span className="rtl-text">نمایش</span>
                        )}
                      </p>
                      <LuArrowRight className="mt-[5.5px]" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <div className="flex flex-col sm:flex-row md:flex-col  lg:flex-row sm:gap-x-4 md:gap-x-14 lg:gap-x-10 xl:gap-x-32 gap-y-3 w-full h-[430px] md:h-64">
                <img
                  className="rounded-xl shadow-lg w-[300px] md:w-[390px] h-[246px]"
                  src="https://i.postimg.cc/sfnQXHKw/tamehsk.png"
                  alt=""
                />
                <div className="flex flex-col items-center w-[320px] md:w-full md:items-start gap-3 ">
                  <h2 className="text-header text-xl font-semibold">
                    {language === "English" ? (
                      <span className="shadow-txt">tameshk shop </span>
                    ) : (
                      <span className="rtl-text shadow-txt">فروشگاه تمشک</span>
                    )}
                  </h2>
                  <p
                    className={`text-midGray text-center pt-3 ${
                      language === "English" ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {language === "English" ? (
                      <span>A web application for buying toys</span>
                    ) : (
                      <span className="rtl-text w-full 	text-right">
                        یک اپلیکیشن تحت وب برای خرید اسباب بازی
                      </span>
                    )}
                  </p>
                  <div className="flex flex-col w-full ms-44 justify-start sm:ms-20 mt-4 md:ms-0 lg:ms-0 xl:ms-0 sm:flex-col md:flex-row lg:flex-col gap-x-32 gap-y-5 md:my-7 ">
                    <div className="flex gap-x-3  text-sm">
                      <div className="w-14 bg-midGray h-[22px] items-center flex justify-center rounded-2xl text-white">
                        Next
                      </div>
                      <div className="w-16 bg-midGray h-[22px] flex justify-center rounded-2xl text-white ">
                        css
                      </div>
                    </div>
                    <a
                      href="https://tameshk-final-v3.elysiumprogramming.com/"
                      className="bg-primary ms-8 sm:ms-0 font-semibold w-20 h-8 rounded-md flex justify-center text-white  items-center gap-x-1"
                    >
                      <p className="">
                        {language === "English" ? (
                          <span>Demo</span>
                        ) : (
                          <span className="rtl-text">نمایش</span>
                        )}
                      </p>
                      <LuArrowRight className="mt-[5.5px]" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <div className="flex flex-col sm:flex-row md:flex-col  lg:flex-row sm:gap-x-4 md:gap-x-14 lg:gap-x-10 xl:gap-x-32 gap-y-3 w-full h-[430px] md:h-64">
                <img
                  className="rounded-xl shadow-lg w-[300px] md:w-[390px] h-[246px]"
                  src="https://i.postimg.cc/sD4VxMVy/abromoj.png"
                  alt=""
                />
                <div className="flex flex-col items-center w-[320px] md:w-full md:items-start gap-3 ">
                  <h2 className="text-header text-xl font-semibold">
                    {language === "English" ? (
                      <span className="shadow-txt">
                        abro moj travel agency{" "}
                      </span>
                    ) : (
                      <span className="rtl-text shadow-txt">
                        آژانس مسافرتی ابر و موج
                      </span>
                    )}
                  </h2>
                  <p
                    className={`text-midGray text-center pt-3 ${
                      language === "English" ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {language === "English" ? (
                      <span>
                        A web application for buying tickets, with various
                        features
                      </span>
                    ) : (
                      <span className="rtl-text w-full 	text-right">
                        یک اپلیکیشن تحت وب برای خرید بلیط سفر
                      </span>
                    )}
                  </p>
                  <div className="flex flex-col w-full ms-44 justify-start sm:ms-20 mt-4 md:ms-0 lg:ms-0 xl:ms-0 sm:flex-col md:flex-row lg:flex-col gap-x-32 gap-y-5 md:my-7 ">
                    <div className="flex gap-x-3  text-sm">
                      <div className="w-24  bg-midGray h-[27px] items-center flex justify-center rounded-2xl text-white">
                        javaScript
                      </div>
                      <div className="w-16 items-center bg-midGray h-[26px] flex justify-center rounded-2xl text-white ">
                        css
                      </div>
                    </div>
                    <a
                      href="https://abromoj-final-v9.9.elysiumprogramming.com/"
                      className="bg-primary ms-8 sm:ms-0 font-semibold w-20 h-8 rounded-md flex justify-center text-white  items-center gap-x-1"
                    >
                      <p className="">
                        {language === "English" ? (
                          <span>Demo</span>
                        ) : (
                          <span className="rtl-text">نمایش</span>
                        )}
                      </p>
                      <LuArrowRight className="mt-[5.5px]" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col sm:flex-row md:flex-col  lg:flex-row sm:gap-x-4 md:gap-x-14 lg:gap-x-10 xl:gap-x-32 gap-y-3 w-full h-[430px] md:h-64">
                <img
                  className="rounded-xl shadow-lg w-[300px] md:w-[350px] h-[196px]"
                  src="https://i.postimg.cc/LXJNtdK6/morent.png"
                  alt=""
                />
                <div className="flex flex-col items-center w-[320px] md:w-full md:items-start ">
                  <h2 className="text-header text-xl font-semibold">
                    {language === "English" ? (
                      <span className="shadow-txt">Car Rental</span>
                    ) : (
                      <span className="rtl-text shadow-txt">اجاره ماشین</span>
                    )}
                  </h2>
                  <p className="text-midGray">
                    {language === "English" ? (
                      <span>
                        This web application is for car rental <br /> at the
                        desired place and time.
                      </span>
                    ) : (
                      <span className="rtl-text">
                        این وب اپلیکیشن برای اجاره ماشین <br />
                        در زمــــان و مــکـان دلخواه می باشد
                      </span>
                    )}
                  </p>
                  <div className="flex flex-col w-full ms-44 justify-start sm:ms-20 mt-4 md:ms-0 lg:ms-0 xl:ms-0 sm:flex-col md:flex-row lg:flex-col gap-x-32 gap-y-5 md:my-7 ">
                    <div className="flex gap-x-3  text-sm">
                      <div className="w-14 bg-midGray h-[22px] items-center flex justify-center rounded-2xl text-white">
                        React
                      </div>
                      <div className="w-16 bg-midGray h-[22px] flex justify-center rounded-2xl text-white ">
                        Tailwind
                      </div>
                    </div>
                    <button className="bg-primary ms-8 sm:ms-0 font-semibold w-20 h-8 rounded-md flex justify-center text-white  items-center gap-x-1">
                      <p className="">
                        {language === "English" ? (
                          <span>Demo</span>
                        ) : (
                          <span className="rtl-text">نمایش</span>
                        )}
                      </p>
                      <LuArrowRight className="mt-[5.5px]" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row sm:gap-x-4 md:gap-x-14 lg:gap-x-10 xl:gap-x-32 gap-y-3 w-full ">
                <img
                  className="rounded-xl shadow-lg w-[300px] md:w-[350px] h-[196px]"
                  src="https://i.postimg.cc/FK9yxMcX/tarkhineh.png"
                  alt=""
                />
                <div className="flex flex-col items-center w-[320px] md:w-full md:items-start ">
                  <h2 className="text-header text-xl font-semibold">
                    {language === "English" ? (
                      <span className="shadow-txt">Order food online</span>
                    ) : (
                      <span className="rtl-text shadow-txt">
                        سفارش آنلاین غذا
                      </span>
                    )}
                  </h2>
                  <p className="text-midGray">
                    {language === "English" ? (
                      <span>
                        Order your food by choosing the branch <br /> and menu
                      </span>
                    ) : (
                      <span className="rtl-text">
                        بـا انتــخاب شـــعبه و مـــنو <br />
                        غذای خود را سفارش دهید
                      </span>
                    )}
                  </p>
                  <div className="flex flex-col w-full ms-44 justify-start sm:ms-20 mt-4 md:ms-0 lg:ms-0 xl:ms-0 sm:flex-col md:flex-row lg:flex-col gap-x-32 gap-y-5 md:my-7 ">
                    <div className="flex gap-x-3  text-sm">
                      <div className="w-14 bg-midGray h-[22px] items-center flex justify-center rounded-2xl text-white">
                        React
                      </div>
                      <div className="w-16 bg-midGray h-[22px] flex justify-center rounded-2xl text-white ">
                        Tailwind
                      </div>
                    </div>
                    <button className="bg-primary ms-7 sm:ms-0 font-semibold w-20 h-8 rounded-md flex justify-center text-white  items-center gap-x-1">
                      <p className="">
                        {language === "English" ? (
                          <span>Demo</span>
                        ) : (
                          <span className="rtl-text">نمایش</span>
                        )}
                      </p>
                      <LuArrowRight className="mt-[5.5px]" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col sm:flex-row md:flex-col xl:gap-x-32 lg:flex-row sm:gap-x-4 md:gap-x-14 lg:gap-x-10 gap-y-3 w-full ">
                <img
                  className="rounded-xl shadow-lg w-[300px] md:w-[350px] h-[196px]"
                  src="https://i.postimg.cc/gcMTLKC0/hotelix.png"
                  alt=""
                />
                <div className="flex flex-col items-center w-[320px] md:w-full md:items-start ">
                  <h2 className="text-header text-xl font-semibold">
                    {language === "English" ? (
                      <span className="shadow-txt">Hotelix</span>
                    ) : (
                      <span className="rtl-text shadow-txt">هُتلیکس</span>
                    )}
                  </h2>
                  <p className="text-midGray">
                    {language === "English" ? (
                      <span>
                        Check and book the hotel using <br />
                        the map search and filter
                      </span>
                    ) : (
                      <span className="rtl-text">
                        با استفاده از نقشه ی جغرافیایی و <br />
                        سرچ و فیلتر هتل خود را رزرو کنید
                      </span>
                    )}
                  </p>
                  <div className="flex flex-col w-full ms-44 justify-start sm:ms-20 mt-4 md:ms-0 lg:ms-0 xl:ms-0 sm:flex-col md:flex-row lg:flex-col gap-x-32 gap-y-5 md:my-7 ">
                    <div className="flex gap-x-3  text-sm">
                      <div className="w-14 bg-midGray h-[22px] items-center flex justify-center rounded-2xl text-white">
                        React
                      </div>
                      <div className="w-16 bg-midGray h-[22px] flex justify-center rounded-2xl text-white ">
                        css
                      </div>
                    </div>
                    <button className="bg-primary ms-8  sm:ms-0 md:ms-0 lg:ms-0 xl:ms-0 font-semibold w-20 h-8 rounded-md flex justify-center text-white  items-center gap-x-1">
                      <p className="">
                        {language === "English" ? (
                          <span>Demo</span>
                        ) : (
                          <span className="rtl-text">نمایش</span>
                        )}
                      </p>
                      <LuArrowRight className="mt-[5.5px]" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-6 md:mt-20 flex flex-col gap-y-16 z-50 ms-7 md:ms-56">
          <h2 data-aos="fade-up" className="text-3xl w-40 text-header ">
            {language === "English" ? (
              <span>Skills</span>
            ) : (
              <span>مهارت ها</span>
            )}
          </h2>
          <div
            data-aos="fade-up"
            className="w-[768px]  hidden md:block lg:ms-28"
          >
            <Swiper modules={[Autoplay]} autoplay={true} slidesPerView={7}>
              <SwiperSlide>
                <div className="flex  items-center bg-[color:#e34f26] text-white px-2 justify-center rounded-sm">
                  <SiHtml5 />
                  <p>HTMl</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-4  items-center bg-[color:#1968a0] text-white px-2 justify-center rounded-sm">
                  <SiCss3 /> <p>CSS</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  md:ms-4 items-center w-[70px] md:w-32 bg-[color:#007ec6] text-white px-2 justify-center rounded-sm">
                  <SiTailwindcss className="text-[color:#05b1d2]" />
                  <p>Tailwind</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  md:ms-10 w-20 items-center bg-[color:#7311ec] md:w-28 text-white px-2 justify-center rounded-sm">
                  <SiBootstrap />
                  <p>Bootstrap</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex md:ms-12 w-24 md:w-28 items-center gap-x-1 bg-[color:#f7df1e] text-black px-2 justify-center rounded-sm">
                  <SiJavascript />
                  <p>JavaScript</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-14 w-24 items-center bg-[color:#32363e] text-white px-2 justify-center rounded-sm">
                  <SiReact className="text-[color:#55b1cc]" />
                  <p>React</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex w-28 ms-12 items-center justify-center bg-black rounded-sm text-white px-2">
                  <SiNextdotjs />
                  <p className="flex items-center justify-center gap-x-1">
                    Next
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-14 w-24 items-center bg-[color:#c2312e] text-white px-2 justify-center rounded-sm">
                  <SiNpm />
                  <p>Npm</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-12 w-16 items-center bg-[color:#f05032] text-white px-2 justify-center rounded-sm">
                  <SiGit />
                  <p>Git</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-2 me-12 w-24 items-center  bg-[color:#181717] text-white px-2 justify-center rounded-sm">
                  <SiGithub />
                  <p>Github</p>
                </div>
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
          <div className="w-[310px] md:hidden ms-5 sm:ms-48 ">
            <Swiper modules={[Autoplay]} slidesPerView={4} autoplay={true}>
              <SwiperSlide>
                <div className="flex  font-bold  text-xs py-1 w-[70px] justify-center rounded items-center bg-[color:#e34f26] text-white ">
                  <SiHtml5 />
                  <p>HTML</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  font-bold  w-[70px] py-1 text-xs  justify-center rounded items-center bg-[color:#1968a0] text-white ">
                  <SiCss3 />
                  <p>Css</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex font-bold text-xs py-1  w-[73px] justify-center rounded items-center bg-[color:#1968a0] text-white ">
                  <SiTailwindcss className="text-[color:#05b1d2]" />
                  <p>Tailwind</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  font-bold   w-20 py-1  items-center bg-[color:#7311ec]  text-white justify-center rounded text-xs">
                  <SiBootstrap />
                  <p>Bootstrap</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  font-bold  w-24 ms-2 py-1  items-center gap-x-1 bg-[color:#f7df1e] text-black justify-center rounded text-xs">
                  <SiJavascript />
                  <p>JavaScript</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  font-bold  w-16 ms-9 py-1  items-center bg-[color:#32363e] text-white  justify-center rounded text-xs">
                  <SiReact className="text-[color:#55b1cc]" />
                  <p>React</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex font-bold  w-16 ms-7 px-1 py-1  items-center justify-center bg-black rounded text-xs text-white ">
                  <SiNextdotjs />
                  <p className="flex items-center justify-center gap-x-1">
                    Next
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-5 py-1 font-bold w-14 text-xs gap-x-1 items-center bg-[color:#c2312e] text-white justify-center rounded">
                  <SiNpm />
                  <p>Npm</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-1 py-1 font-bold  w-12 text-xs items-center bg-[color:#f05032] text-white px-1 justify-center rounded">
                  <SiGit />
                  <p>Git</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex py-1 font-bold ms-[-19px] me-12 w-20 items-center  bg-[color:#181717] text-white text-xs justify-center rounded">
                  <SiGithub />
                  <p>Github</p>
                </div>
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Contact language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
};

export default Projects;
