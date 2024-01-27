import { motion } from "framer-motion";
import Dropdown, { DropdownContent, DropdownTrigger } from "./dropdown";
import { useState } from "react";
import Chart from "./bar-chart";
import LineChart from "./line-chart";

const BarChartCard = () => {
  const [option, setOption] = useState("Weekly");

  return (
    <div className="bg-white dark:bg-[#0D0D0D] border rounded-[14px] border-[#EDF2F7] dark:border-[#1A1A1A]">
      <div className="flex items-center justify-between px-[20px] py-[16px]">
        <h4 className="text-base lg:text-lg font-semibold text-[#26282C] dark:text-[#D3D5D9]">
          Sales Trends
        </h4>

        <div className="flex relative items-center justify-center gap-2.5">
          <h4 className="text-xs lg:text-sm font-medium text-[#3A3F51]">
            Sort By:
          </h4>

          <Dropdown>
            <DropdownTrigger>
              <button className="text-[#3A3F51] relative hover:bg-[#B2ABAB]/10 text-[10px] gap-2.5 lg:text-xs flex items-center justify-center px-[12px] py-[6px] border border-[#E1DFDF] dark:border-[#2D2A2A] rounded-full select-none">
                {option}
                {/* prettier-ignore */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path className="fill-black dark:fill-white" d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z"/>
                  </svg>
              </button>
            </DropdownTrigger>

            <DropdownContent className="bg-white dark:bg-[#0D0D0D] opacity-100 group-hover:opacity-100 border absolute right-[-0px] top-10 z-30 rounded-[14px] w-[100px] border-[#E1DFDF] dark:border-[#2D2A2A] flex items-center justify-center flex-col">
              <div
                className={`${
                  option === "Daily"
                    ? "hover:bg-[#B2ABAB]/10 bg-[#B2ABAB]/10"
                    : "hover:bg-[#B2ABAB]/10 bg-transparent"
                } cursor-pointer hover:bg-[#B2ABAB]/10 py-2 border-b border-[#E1DFDF]/50 dark:border-[#2D2A2A]/50 rounded-t-[14px] w-[100px]`}
                onClick={() => setOption("Daily")}
              >
                <h4 className="text-[10px] text-center lg:text-xs text-[#3A3F51]">
                  Daily
                </h4>
              </div>
              <div
                className={`${
                  option === "Weekly"
                    ? "hover:bg-[#B2ABAB]/10 bg-[#B2ABAB]/10"
                    : "hover:bg-[#B2ABAB]/10 bg-transparent"
                } cursor-pointer hover:bg-[#B2ABAB]/10 py-2 border-b border-[#E1DFDF]/50 dark:border-[#2D2A2A]/50 w-[100px]`}
                onClick={() => setOption("Weekly")}
              >
                <h4 className="text-[10px] text-center lg:text-xs text-[#3A3F51]">
                  Weekly
                </h4>
              </div>
              <div
                className={`${
                  option === "Monthly"
                    ? "hover:bg-[#B2ABAB]/10 bg-[#B2ABAB]/10"
                    : "hover:bg-[#B2ABAB]/10 bg-transparent"
                } cursor-pointer hover:bg-[#B2ABAB]/10 rounded-b-[14px] py-2 w-[100px]`}
                onClick={() => setOption("Monthly")}
              >
                <h4 className="text-[10px] text-center lg:text-xs text-[#3A3F51]">
                  Monthly
                </h4>
              </div>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>

      <div className="px-5 hidden pb-5 w-[866px] h-[300px]">
        <Chart />
        <LineChart />
      </div>

      <div className="flex-col gap-[12px] pb-[16px]">
        <div className="px-[20px] flex gap-6 items-center justify-center">
          <div className="h-[255px] w-fit text-[#525252] text-[10px] sm:text-xs lg:text-xs flex flex-col font-semibold justify-between">
            <h5>50.000</h5>
            <h5>40.000</h5>
            <h5>30.000</h5>
            <h5>20.000</h5>
            <h5>10.000</h5>
            <h5>5.000</h5>
            <h5>0</h5>
          </div>

          <div className="relative w-full h-[255px] items-center justify-between flex flex-col gap-[27.22px]">
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>
            <div className="w-full lg:w-[450px] xl:w-[696px] h-[10px] border-b border-dashed border-[#EAEAEA] dark:border-[#222222]"></div>

            <div className="absolute z-20 bottom-0 w-full flex gap-[8px] lg:gap-[30px] justify-between items-end">
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "68px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $14.167
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "120px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $25.000
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "40px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $8.333
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "161px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $33.542
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "81px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $16.875
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "216px" }}
                transition={{
                  duration: 0.5,
                  delay: 1.0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative group md:w-[30px] linear-bg rounded-t-[20px] flex items-center justify-center"
              >
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                    <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
                  </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $45.000
                  </h5>
                </div>
              </motion.div>

              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "81px" }}
                transition={{
                  duration: 0.5,
                  delay: 1.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $16.875
                  </h5>
                </div>
              </motion.div>

              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "131px" }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px]  bg-[#34CAA51A] rounded-t-[20px]"
              >
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $27.292
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "182px" }}
                transition={{
                  duration: 0.5,
                  delay: 1.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $37.917
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "51px" }}
                transition={{
                  duration: 0.5,
                  delay: 1.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $10.625
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "171px" }}
                transition={{
                  duration: 0.5,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $35.625
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "151px" }}
                transition={{
                  duration: 0.5,
                  delay: 1.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-[20px] group relative flex items-center justify-center md:w-[30px] bg-[#34CAA51A] rounded-t-[20px]"
              >
                {" "}
                <div className="absolute opacity-0 group-hover:opacity-100 top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
                <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
              </svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $31.458
                  </h5>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between px-[20px] gap-[23px] lg:gap-[12px]">
          <h5 className="w-fit text-[#525252] border text-xs lg:text-xs flex flex-col font-semibold justify-between opacity-0">
            50.000
          </h5>
          <div className="text-[#525252] text-[10px] sm:text-xs md:text-sm flex font-semibold w-full lg:w-[450px] xl:w-[696px] items-center justify-between">
            <h5>Jan</h5>
            <h5>Feb</h5>
            <h5 className="mr-[-4px]">Mar</h5>
            <h5>Apr</h5>
            <h5>May</h5>
            <h5>Jun</h5>
            <h5>Jul</h5>
            <h5 className="mr-[-4px]">Aug</h5>
            <h5>Sep</h5>
            <h5>Oct</h5>
            <h5 className="mr-[-4px]">Nov</h5>
            <h5>Dec</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChartCard;
