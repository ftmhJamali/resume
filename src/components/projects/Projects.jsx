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
    <div className="relative  md:pt-64 h-[1790px] overflow-hidden w-full ">
      <div className="absolute z-40 w-[2700px]  h-[2700px] -left-48  rounded-[770px] rotate-45 bg-projectBg"></div>
      <div className="absolute z-[60] w-full  flex flex-col gap-y-16 left-9 md:left-[360px] top-64 md:top-48 ">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-white text-3xl"
        >
          {language === "English" ? (
            <span>Projects</span>
          ) : (
            <span>پروژه ها</span>
          )}
        </h2>
        <div data-aos="fade-up" className="z-[70] md:w-[868px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-x-28 gap-y-5 w-full h-[430px] md:h-64 md:flex-row">
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
                  <div className="flex gap-x-3 my-6 text-sm">
                    <div className="w-14 bg-midGray flex justify-center rounded-2xl text-white">
                      React
                    </div>
                    <div className="w-16 bg-midGray flex justify-center rounded-2xl text-white ">
                      Tailwind
                    </div>
                  </div>
                  <button className="bg-primary font-semibold w-20 h-8 rounded-md flex justify-center text-white mt-3 items-center gap-x-1">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-x-28 gap-y-5 w-full md:flex-row">
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
                  <div className="flex gap-x-3 my-6 text-sm">
                    <div className="w-14 bg-midGray flex justify-center rounded-2xl text-white">
                      React
                    </div>
                    <div className="w-16 bg-midGray flex justify-center rounded-2xl text-white ">
                      Tailwind
                    </div>
                  </div>
                  <button className="bg-primary font-semibold w-20 h-8 rounded-md flex justify-center text-white mt-3 items-center gap-x-1">
                    {language === "English" ? (
                      <span>Demo</span>
                    ) : (
                      <span className="rtl-text">نمایش</span>
                    )}

                    <LuArrowRight className="mt-[5.5px]" />
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-x-28 gap-y-5 w-full md:flex-row">
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
                        Check and book the hotel using the map <br /> search and
                        filter
                      </span>
                    ) : (
                      <span className="rtl-text">
                        با استفاده از نقشه ی جغرافیایی و <br />
                        سرچ و فیلتر هتل خود را رزرو کنید
                      </span>
                    )}
                  </p>
                  <div className="flex gap-x-3 my-6 text-sm">
                    <div className="w-14 bg-midGray flex items-center justify-center rounded-2xl text-white">
                      React
                    </div>
                    <div className="w-12 items-center pb-1 bg-midGray flex justify-center rounded-2xl text-white ">
                      css
                    </div>
                  </div>
                  <button className="bg-primary font-semibold w-20 h-8 rounded-md flex justify-center text-white mt-3 items-center gap-x-1">
                    {language === "English" ? (
                      <span>Demo</span>
                    ) : (
                      <span className="rtl-text">نمایش</span>
                    )}
                    <LuArrowRight className="mt-[5.5px]" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-6 md:mt-20 flex flex-col gap-y-16">
          <h2 data-aos="fade-up" className="text-3xl text-header">
            {language === "English" ? (
              <span>Skills</span>
            ) : (
              <span>مهارت ها</span>
            )}
          </h2>
          <div data-aos="fade-up" className="w-[800px]  hidden md:block">
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
                <div className="flex w-36 ms-14 items-center justify-center bg-black rounded-sm text-white px-2">
                  <SiNextdotjs />
                  <p className="flex items-center justify-center gap-x-1">
                    Next <span className="text-xs">(learning)</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-24 w-24 items-center bg-[color:#c2312e] text-white px-2 justify-center rounded-sm">
                  <SiNpm />
                  <p>Npm</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-[88px] w-16 items-center bg-[color:#f05032] text-white px-2 justify-center rounded-sm">
                  <SiGit />
                  <p>Git</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-12 me-12 w-24 items-center  bg-[color:#181717] text-white px-2 justify-center rounded-sm">
                  <SiGithub />
                  <p>Github</p>
                </div>
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
          <div className="w-[310px] md:hidden ">
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
                <div className="flex font-bold  w-28 ms-8 px-1 py-1  items-center justify-center bg-black rounded text-xs text-white ">
                  <SiNextdotjs />
                  <p className="flex items-center justify-center gap-x-1">
                    Next <span className="text-xs">(learning)</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-[76px] py-1 font-bold w-14 text-xs gap-x-1 items-center bg-[color:#c2312e] text-white justify-center rounded">
                  <SiNpm />
                  <p>Npm</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex ms-16 py-1 font-bold  w-12 text-xs items-center bg-[color:#f05032] text-white px-1 justify-center rounded">
                  <SiGit />
                  <p>Git</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex py-1 font-bold ms-11 me-12 w-16 items-center  bg-[color:#181717] text-white text-xs justify-center rounded">
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
