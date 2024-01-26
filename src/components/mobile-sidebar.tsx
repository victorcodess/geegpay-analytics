import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Dropdown, { DropdownContent, DropdownTrigger } from "./dropdown";
import { getCurrentDateFormattedShort } from "../utils";
const MobileSidebar = () => {
  //   const [dark, setDark] = useState(false);
  const dark = false;
  const [unread, setUnread] = useState(true);

  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  useEffect(() => {
    // function handleToggle() {
    if (!dark) {
      //   handleClick();
    } else {
      //   handleClick();
    }
    // setDark(!dark);
    //   }
  }, [dark]);

  return (
    <div className="h-[100vh] w-[300px] fixed flex py-5 bg-[#F7F8FA] dark:bg-[#131313] flex-col items-start justify-between gap-[28px]">
      <div className="z-50 absolute top-5 right-5 flex items-center gap-5">
        <div className="gap-2.5 flex">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path className="stroke-black dark:stroke-white" d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z"  stroke-width="1.37144"/>
            <path className="stroke-black dark:stroke-white" d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999" stroke-width="1.37144" stroke-linecap="round"/>
            <path className="fill-black dark:fill-white" d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z" />
            </svg>
          <h3 className="text-sm text-[#26282C] font-medium dark:text-[#D3D5D9]">
            {getCurrentDateFormattedShort()}
          </h3>
        </div>

        <Dropdown>
          <DropdownTrigger>
            <div className="border-[0.769px] relative hover:bg-[#B2ABAB]/10 cursor-pointer border-[#DADDDD] dark:border-[#262626] flex items-center justify-center p-[11px] rounded-full">
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"/>
            </svg>

              {unread && (
                <div className="absolute w-2 h-2 top-2 right-3 bg-red-500 rounded-full"></div>
              )}
            </div>
          </DropdownTrigger>

          <DropdownContent className="bg-white dark:bg-[#0D0D0D] opacity-100 group-hover:opacity-100 border absolute right-[-0px] top-[50px] z-30 rounded-[14px] w-[250px]  border-[#E1DFDF] dark:border-[#2D2A2A] flex items-center justify-center flex-col">
            <div
              onClick={() => setUnread(false)}
              className={`flex px-3 gap-2 items-center justify-between w-full bg-transparent cursor-pointer hover:bg-[#B2ABAB]/10 py-4 border-b border-[#E1DFDF]/50 dark:border-[#2D2A2A]/50 rounded-t-[14px] `}
            >
              <div className="border border-[#DADDDD] dark:border-[#262626] flex items-center justify-center rounded-full  p-2">
                {/* prettier-ignore */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="vuesax/bulk/shopping-cart">
                  <g id="shopping-cart">
                  <path id="Vector" d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z" fill="#34CAA5"/>
                  <path id="Vector_2" d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z" fill="#34CAA5"/>
                  <path id="Vector_3" opacity="0.4" d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.92999 21.55 6.50999C21.68 4.73999 20.33 3.3 18.56 3.3H6.28999C6.18999 2.86 5.98999 2.44 5.67999 2.09C5.18999 1.56 4.49 1.25 3.77 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74001C4.05001 2.75 4.34 2.88001 4.55 3.10001C4.76 3.33001 4.86 3.63 4.84 3.94Z" fill="#34CAA5"/>
                  <path id="Vector_4" d="M20.5101 8.75H5.17006C4.75006 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.53 5.21006 17 6.92006 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.60001C21.3401 9.14001 20.9801 8.75 20.5101 8.75Z" fill="#34CAA5"/>
                  </g>
                  </g>
                  </svg>
              </div>

              <div className="flex flex-col gap-[2px] max-w-[160px]">
                <h4 className="inter text-[#606060] font-semibold leading-[15px] text-[12px] line-clamp-1 break-all">
                  A sale of $350.000 was made to your account
                </h4>
                <h4 className="inter text-[#606060]/50 leading-[15px] text-[10px] w-[170px]">
                  1 day ago.
                </h4>
              </div>

              <div
                className={`${
                  unread ? "bg-red-500" : "bg-transparent"
                } w-2 h-2 rounded-full`}
              ></div>
            </div>

            <div
              className={`flex px-3 gap-2 items-center justify-between w-full bg-transparent cursor-pointer hover:bg-[#B2ABAB]/10 py-4 rounded-b-[14px] `}
            >
              <div className="border border-[#DADDDD] dark:border-[#262626] flex items-center justify-center rounded-full  p-2">
                {/* prettier-ignore */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bulk/box-tick">
                <g id="box-tick">
                <path id="Vector" opacity="0.4" d="M19.3499 5.65995L13.0599 2.27C12.3999 1.91 11.5999 1.91 10.9299 2.27L4.63992 5.65995C4.17992 5.90995 3.8999 6.39998 3.8999 6.93998C3.8999 7.47998 4.17992 7.96995 4.63992 8.21995L10.9299 11.61C11.2599 11.79 11.6299 11.88 11.9899 11.88C12.3499 11.88 12.7199 11.79 13.0499 11.61L19.3399 8.21995C19.7999 7.96995 20.0799 7.47998 20.0799 6.93998C20.0999 6.39998 19.8099 5.90995 19.3499 5.65995Z" fill="#34CAA5"/>
                <path id="Vector_2" opacity="0.4" d="M9.90021 12.79L4.0502 9.86001C3.6002 9.63001 3.08021 9.66001 2.65021 9.92001C2.22021 10.18 1.97021 10.64 1.97021 11.14V16.67C1.97021 17.63 2.5002 18.49 3.3602 18.92L9.21021 21.8401C9.4102 21.9401 9.63022 21.99 9.85022 21.99C10.1102 21.99 10.3702 21.92 10.6002 21.77C11.0302 21.51 11.2802 21.05 11.2802 20.55V15.02C11.2902 14.08 10.7602 13.22 9.90021 12.79Z" fill="#34CAA5"/>
                <path id="Vector_3" opacity="0.4" d="M22.03 11.15V15.74C22.02 15.73 22.01 15.71 22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.82 21.11 15.03 21.37 15.26 21.61L14.79 21.85C14.59 21.95 14.37 22 14.15 22C13.89 22 13.63 21.93 13.39 21.78C12.97 21.52 12.71 21.06 12.71 20.56V15.04C12.71 14.08 13.24 13.22 14.1 12.79L19.95 9.87C20.4 9.64 20.92 9.66 21.35 9.93C21.77 10.19 22.03 10.65 22.03 11.15Z" fill="#34CAA5"/>
                <path id="Vector_4" d="M21.98 15.67C21.16 14.66 19.91 14.02 18.5 14.02C17.44 14.02 16.46 14.39 15.69 15.01C14.65 15.83 14 17.1 14 18.52C14 19.36 14.24 20.16 14.65 20.84C14.92 21.29 15.26 21.68 15.66 22H15.67C16.44 22.64 17.43 23.02 18.5 23.02C19.64 23.02 20.67 22.6 21.46 21.9C21.81 21.6 22.11 21.24 22.35 20.84C22.76 20.16 23 19.36 23 18.52C23 17.44 22.62 16.44 21.98 15.67ZM20.76 17.96L18.36 20.18C18.22 20.31 18.03 20.38 17.85 20.38C17.66 20.38 17.47 20.31 17.32 20.16L16.21 19.05C15.92 18.76 15.92 18.28 16.21 17.99C16.5 17.7 16.98 17.7 17.27 17.99L17.87 18.59L19.74 16.86C20.04 16.58 20.52 16.6 20.8 16.9C21.09 17.21 21.07 17.68 20.76 17.96Z" fill="#34CAA5"/>
                </g>
                </g>
                </svg>
              </div>

              <div className="flex flex-col gap-[2px] max-w-[160px]">
                <h4 className="inter text-[#606060] font-semibold leading-[15px] text-[12px] line-clamp-1 break-all">
                  Your account was created.
                </h4>
                <h4 className="inter text-[#606060]/50 leading-[15px] text-[10px] w-[170px]">
                  3 days ago.
                </h4>
              </div>

              <div className="w-2 h-2 bg-transparent rounded-full"></div>
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="px-5 cursor-pointer">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path className="fill-[#34CAA5] dark:fill-[#48D0AE]" fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z"/>
          </svg>
        </div>

        <div className="flex flex-col gap-[16px] items-start justify-center">
          <div className="py-[8px] w-full flex items-start justify-start relative cursor-pointer pl-5">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"/>
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" opacity="0.4" d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"/>
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z"/>
              <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" opacity="0.4" d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"/>
            </svg>

            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="21" viewBox="0 0 3 21" fill="none" className="absolute right-0 top-0 bottom-0 my-auto rotate-0">
            <path className="fill-[#0D062D] dark:fill-[#D9D2F9]" d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"/>
              </svg>

            <h3 className="pl-5 text-[#26282C] dark:text-[#D9D2F9] font-semibold">
              Dashboard
            </h3>
          </div>

          <div className="py-[8px] cursor-pointer flex gap-5 ml-3 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.17 12L10.7 11.3L7.5 14.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5 9.5L14.99 11.01L14 12" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.5 9.5H16.5V11.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            <h3 className="text-[#B2ABAB] text-md font-medium">Trends</h3>
          </div>

          <div className="py-[8px] cursor-pointer flex gap-5 ml-3 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.6801 3.96C13.1601 4.67 13.4401 5.52 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            <h3 className="text-[#B2ABAB] text-md font-medium">Customers</h3>
          </div>

          <div className="py-[8px] cursor-pointer flex gap-5 ml-3 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.16992 7.44006L11.9999 12.55L20.7699 7.47003" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 21.61V12.54" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.39014 9.17007C2.39014 7.79007 3.38012 6.11009 4.59012 5.44009L9.93011 2.47006C11.0701 1.84006 12.9401 1.84006 14.0801 2.47006L19.4201 5.44009C20.6301 6.11009 21.6201 7.79007 21.6201 9.17007V14.8201C21.6201 16.2001 20.6301 17.8801 19.4201 18.5501L14.0801 21.5201C12.9401 22.1501 11.0701 22.1501 9.93011 21.5201L4.59012 18.5501C3.38012 17.8801 2.39014 16.2001 2.39014 14.8201V14.0001" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.9998 13.24V9.58002L10.9297 6.07001L9.87976 5.46997L7.50977 4.09998" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            <h3 className="text-[#B2ABAB] text-md font-medium">Inventory</h3>
          </div>

          <div className="py-[8px] cursor-pointer flex gap-5 ml-3 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14.6599 20.01L13.1399 21.53C12.5199 22.15 11.4999 22.15 10.8799 21.53L9.3599 20.01C9.0999 19.75 8.58992 19.54 8.22992 19.54H6.0799C5.1999 19.54 4.47992 18.8199 4.47992 17.9399V15.79C4.47992 15.43 4.26992 14.92 4.00992 14.66L2.4899 13.14C1.8699 12.52 1.8699 11.5 2.4899 10.88L4.00992 9.35999C4.26992 9.09999 4.47992 8.58998 4.47992 8.22998V6.07996C4.47992 5.19996 5.1999 4.47998 6.0799 4.47998" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.33984 3.99002L10.8598 2.47C11.4798 1.85 12.4998 1.85 13.1198 2.47L14.6399 3.99002C14.8999 4.25002 15.4098 4.46 15.7698 4.46H17.9199C18.7999 4.46 19.5198 5.18009 19.5198 6.06009V8.21C19.5198 8.57 19.7298 9.08 19.9898 9.34L21.5099 10.86C22.1299 11.48 22.1299 12.5 21.5099 13.12L19.9898 14.64C19.7298 14.9 19.5198 15.4101 19.5198 15.7701V17.9201C19.5198 18.8001 18.7999 19.5201 17.9199 19.5201" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 15L15 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.4945 14.5H14.5035" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.49451 9.5H9.50349" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            <h3 className="text-[#B2ABAB] text-md font-medium">Discounts</h3>
          </div>

          <div className="py-[8px] cursor-pointer flex gap-5 ml-3 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 8V13" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9946 16H12.0036" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            <h3 className="text-[#B2ABAB] text-md font-medium">Details</h3>
          </div>

          <motion.div
            // whileTap={{ rotate: 360 }}
            // onClick={() => setDark(!dark)}
            onClick={() => handleClick()}
            className="bg-white relative dark:bg-[#0D0D0D] h-[92px] flex flex-col items-center justify-center rounded-full p-2 gap-4 ml-2.5"
          >
            <div
              className={`bg-[#34CAA5] rounded-full w-[30px] h-[30px] absolute ${
                dark ? "top-[54px]" : "top-[8px]"
              }`}
            ></div>
            {/* <div
              className="bg-[#34CAA5] rounded-full w-[30px] h-[30px] flex items-center justify-center cur"
            > */}
            {/* prettier-ignore */}
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 18" fill="none" className={`cursor-pointer z-10 ${!dark? "w-[18px] h-[18px]" :"w-[30px] h-[30px]"}`}>
              <g clip-path="url(#clip0_1826_464)">
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M9 13.2188C11.33 13.2188 13.2188 11.33 13.2188 9C13.2188 6.67005 11.33 4.78125 9 4.78125C6.67005 4.78125 4.78125 6.67005 4.78125 9C4.78125 11.33 6.67005 13.2188 9 13.2188Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M9 3.09345C8.53363 3.09345 8.15625 2.71564 8.15625 2.2497V1.40625C8.15625 0.940309 8.53363 0.5625 9 0.5625C9.46637 0.5625 9.84375 0.940309 9.84375 1.40625V2.2497C9.84375 2.71564 9.46637 3.09345 9 3.09345Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M13.7734 5.07056C13.5576 5.07056 13.3417 4.98816 13.1769 4.82336C12.8473 4.49387 12.8473 3.95964 13.1769 3.63015L13.7734 3.03369C14.103 2.7043 14.637 2.7042 14.9666 3.03379C15.2961 3.36328 15.2961 3.89751 14.9666 4.227L14.37 4.82346C14.2052 4.98816 13.9893 5.07056 13.7734 5.07056Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M16.5937 9.84375H15.75C15.2836 9.84375 14.9062 9.46594 14.9062 9C14.9062 8.53406 15.2836 8.15625 15.75 8.15625H16.5937C17.0601 8.15625 17.4375 8.53406 17.4375 9C17.4375 9.46594 17.0601 9.84375 16.5937 9.84375Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M14.37 15.2133C14.1541 15.2133 13.9382 15.131 13.7734 14.9662L13.1769 14.3698C12.8473 14.0403 12.8473 13.5061 13.1769 13.1766C13.5065 12.847 14.0404 12.8469 14.37 13.1765L14.9666 13.7729C15.2961 14.1024 15.2961 14.6366 14.9666 14.9661C14.8018 15.1309 14.5859 15.2133 14.37 15.2133Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M9 17.4374C8.53363 17.4374 8.15625 17.0596 8.15625 16.5937V15.7502C8.15625 15.2843 8.53363 14.9065 9 14.9065C9.46637 14.9065 9.84375 15.2843 9.84375 15.7502V16.5937C9.84375 17.0596 9.46637 17.4374 9 17.4374Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M3.63037 15.2134C3.41449 15.2134 3.19861 15.131 3.03381 14.9662C2.70422 14.6367 2.70422 14.1025 3.03381 13.773L3.63037 13.1765C3.95996 12.8471 4.4939 12.847 4.82349 13.1766C5.15308 13.5061 5.15308 14.0403 4.82349 14.3698L4.22693 14.9663C4.06213 15.131 3.84625 15.2134 3.63037 15.2134Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M2.25 9.84375H1.40625C0.93988 9.84375 0.5625 9.46594 0.5625 9C0.5625 8.53406 0.93988 8.15625 1.40625 8.15625H2.25C2.71637 8.15625 3.09375 8.53406 3.09375 9C3.09375 9.46594 2.71637 9.84375 2.25 9.84375Z"/>
                <path className={`${dark? "fill-[#B2ABAB]" :"fill-white dark:fill-[#0D0D0D]"}`} d="M4.22693 5.07063C4.01105 5.07063 3.79517 4.98833 3.63037 4.82354L3.03381 4.22708C2.70422 3.89759 2.70422 3.36335 3.03381 3.03386C3.3634 2.70427 3.89734 2.70417 4.22693 3.03376L4.82349 3.63022C5.15308 3.95971 5.15308 4.49395 4.82349 4.82344C4.65869 4.98823 4.44281 5.07063 4.22693 5.07063Z"/>
              </g>
              <defs>
                <clipPath id="clip0_1826_464">
                  <rect width="16.875" height="16.875" fill="white" transform="translate(0.5625 0.5625)"/>
                </clipPath>
              </defs>
            </svg>
            {/* </div> */}

            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" fill="none" className={`z-10 cursor-pointer ${dark? "w-[18px] h-[18px]" :"w-[30px] h-[30px]"}`} >
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M15 4.6875C15.2486 4.6875 15.4871 4.58873 15.6629 4.41291C15.8387 4.2371 15.9375 3.99864 15.9375 3.75V2.8125C15.9375 2.56386 15.8387 2.3254 15.6629 2.14959C15.4871 1.97377 15.2486 1.875 15 1.875C14.7514 1.875 14.5129 1.97377 14.3371 2.14959C14.1613 2.3254 14.0625 2.56386 14.0625 2.8125V3.75C14.0625 3.99864 14.1613 4.2371 14.3371 4.41291C14.5129 4.58873 14.7514 4.6875 15 4.6875Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M15 25.3125C14.7514 25.3125 14.5129 25.4113 14.3371 25.5871C14.1613 25.7629 14.0625 26.0014 14.0625 26.25V27.1875C14.0625 27.4361 14.1613 27.6746 14.3371 27.8504C14.5129 28.0262 14.7514 28.125 15 28.125C15.2486 28.125 15.4871 28.0262 15.6629 27.8504C15.8387 27.6746 15.9375 27.4361 15.9375 27.1875V26.25C15.9375 26.0014 15.8387 25.7629 15.6629 25.5871C15.4871 25.4113 15.2486 25.3125 15 25.3125Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M27.1875 14.0625H26.25C26.0014 14.0625 25.7629 14.1613 25.5871 14.3371C25.4113 14.5129 25.3125 14.7514 25.3125 15C25.3125 15.2486 25.4113 15.4871 25.5871 15.6629C25.7629 15.8387 26.0014 15.9375 26.25 15.9375H27.1875C27.4361 15.9375 27.6746 15.8387 27.8504 15.6629C28.0262 15.4871 28.125 15.2486 28.125 15C28.125 14.7514 28.0262 14.5129 27.8504 14.3371C27.6746 14.1613 27.4361 14.0625 27.1875 14.0625Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M3.75 14.0625H2.8125C2.56386 14.0625 2.3254 14.1613 2.14959 14.3371C1.97377 14.5129 1.875 14.7514 1.875 15C1.875 15.2486 1.97377 15.4871 2.14959 15.6629C2.3254 15.8387 2.56386 15.9375 2.8125 15.9375H3.75C3.99864 15.9375 4.2371 15.8387 4.41291 15.6629C4.58873 15.4871 4.6875 15.2486 4.6875 15C4.6875 14.7514 4.58873 14.5129 4.41291 14.3371C4.2371 14.1613 3.99864 14.0625 3.75 14.0625Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M22.9549 5.71883L22.2921 6.38164C22.2025 6.46813 22.1311 6.57157 22.082 6.68595C22.0328 6.80033 22.007 6.92335 22.0059 7.04783C22.0048 7.17231 22.0285 7.29576 22.0757 7.41098C22.1228 7.52619 22.1924 7.63087 22.2804 7.71889C22.3685 7.80691 22.4731 7.87653 22.5884 7.92366C22.7036 7.9708 22.827 7.99452 22.9515 7.99344C23.076 7.99236 23.199 7.9665 23.3134 7.91736C23.4278 7.86823 23.5312 7.79681 23.6177 7.70727L24.2814 7.04539C24.3685 6.95829 24.4376 6.85488 24.4848 6.74108C24.5319 6.62727 24.5562 6.5053 24.5562 6.38211C24.5562 6.25893 24.5319 6.13695 24.4848 6.02315C24.4376 5.90934 24.3685 5.80594 24.2814 5.71883C24.1943 5.63173 24.0909 5.56263 23.9771 5.51549C23.8633 5.46835 23.7413 5.44409 23.6182 5.44409C23.495 5.44409 23.373 5.46835 23.2592 5.51549C23.1454 5.56263 23.042 5.63173 22.9549 5.71883Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M6.38185 22.292L5.7181 22.9548C5.631 23.0419 5.5619 23.1453 5.51476 23.2591C5.46762 23.3729 5.44336 23.4949 5.44336 23.6181C5.44336 23.7413 5.46762 23.8632 5.51476 23.977C5.5619 24.0909 5.631 24.1943 5.7181 24.2814C5.89401 24.4573 6.1326 24.5561 6.38138 24.5561C6.50456 24.5561 6.62654 24.5318 6.74035 24.4847C6.85415 24.4376 6.95756 24.3685 7.04466 24.2814L7.70747 23.6185C7.79458 23.5315 7.86368 23.4282 7.91085 23.3144C7.95801 23.2007 7.98231 23.0787 7.98235 22.9556C7.9824 22.8325 7.95819 22.7105 7.9111 22.5967C7.86402 22.483 7.79499 22.3796 7.70794 22.2925C7.6209 22.2054 7.51756 22.1362 7.40381 22.0891C7.29006 22.0419 7.16813 22.0176 7.04499 22.0176C6.7963 22.0175 6.55776 22.1162 6.38185 22.292Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M23.6171 22.292C23.4403 22.1212 23.2035 22.0267 22.9577 22.0288C22.7119 22.031 22.4767 22.1296 22.3029 22.3034C22.1291 22.4772 22.0305 22.7124 22.0284 22.9582C22.0262 23.204 22.1207 23.4408 22.2915 23.6176L22.9543 24.2814C23.1302 24.4573 23.3688 24.5561 23.6176 24.5561C23.8664 24.5561 24.1049 24.4573 24.2809 24.2814C24.4568 24.1054 24.5556 23.8668 24.5556 23.6181C24.5556 23.3693 24.4568 23.1307 24.2809 22.9548L23.6171 22.292Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M6.38185 7.70821C6.55866 7.87898 6.79548 7.97347 7.04129 7.97134C7.2871 7.9692 7.52223 7.87061 7.69605 7.69679C7.86987 7.52297 7.96847 7.28783 7.97061 7.04202C7.97274 6.79621 7.87825 6.5594 7.70747 6.38258L7.04466 5.71883C6.86875 5.54292 6.63016 5.44409 6.38138 5.44409C6.1326 5.44409 5.89401 5.54292 5.7181 5.71883C5.54219 5.89474 5.44336 6.13333 5.44336 6.38211C5.44336 6.63089 5.54219 6.86948 5.7181 7.04539L6.38185 7.70821Z"/>
              <path className={`${dark? "fill-white" :"fill-[#B2ABAB]"}`} d="M23.1567 16.3903C23.0357 16.271 22.8846 16.1867 22.7195 16.1466C22.5543 16.1065 22.3814 16.112 22.2192 16.1625C21.5901 16.3568 20.9351 16.4542 20.2767 16.4513C18.4926 16.4495 16.7821 15.7401 15.5205 14.4787C14.2589 13.2173 13.5493 11.5069 13.5473 9.72285C13.545 9.06465 13.643 8.40995 13.8379 7.78128C13.8888 7.61887 13.8945 7.44566 13.8544 7.28025C13.8144 7.11483 13.73 6.96344 13.6104 6.84232C13.4909 6.7212 13.3406 6.63492 13.1757 6.59273C13.0108 6.55055 12.8375 6.55404 12.6745 6.60285C11.2513 7.03321 9.96401 7.82507 8.9381 8.9012C7.91218 9.97733 7.18269 11.301 6.82077 12.7431C6.45885 14.1851 6.47687 15.6964 6.87306 17.1294C7.26925 18.5624 8.03008 19.8683 9.08136 20.9197C10.1326 21.9711 11.4385 22.732 12.8715 23.1283C14.3045 23.5247 15.8157 23.5428 17.2578 23.181C18.6999 22.8192 20.0236 22.0898 21.0999 21.064C22.1761 20.0382 22.9681 18.751 23.3985 17.3278C23.4473 17.1644 23.4506 16.9907 23.408 16.8255C23.3654 16.6603 23.2785 16.5098 23.1567 16.3903Z"/>
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] pl-3 w-full items-start justify-center">
        <div className="py-[8px] cursor-pointer flex gap-5 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.5 12H14.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 15L15.5 12L12.5 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

          <h3 className="text-[#B2ABAB] text-md font-medium">Last Orders</h3>
        </div>

        <div className="py-[8px] cursor-pointer flex gap-5 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.87988 20.5799L7.96988 21.2099C8.75988 21.6799 9.77988 21.3999 10.2499 20.6099L10.3599 20.4199C11.2599 18.8499 12.7399 18.8499 13.6499 20.4199L13.7599 20.6099C14.2299 21.3999 15.2499 21.6799 16.0399 21.2099L17.7699 20.2199C18.6799 19.6999 18.9899 18.5299 18.4699 17.6299C17.5599 16.0599 18.2999 14.7799 20.1099 14.7799C21.1499 14.7799 22.0099 13.9299 22.0099 12.8799V11.1199C22.0099 10.0799 21.1599 9.21995 20.1099 9.21995C19.0999 9.21995 18.4199 8.81995 18.1799 8.18995C17.9899 7.69995 18.0699 7.05995 18.4699 6.36995C18.9899 5.45995 18.6799 4.29995 17.7699 3.77995L16.9599 3.31995" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.64 3.58006C12.74 5.15006 11.26 5.15006 10.35 3.58006L10.24 3.39006C9.78 2.60006 8.76 2.32006 7.97 2.79006L6.24 3.78006C5.33 4.30006 5.02 5.47006 5.54 6.38006C6.45 7.94006 5.71 9.22006 3.9 9.22006C2.86 9.22006 2 10.0701 2 11.1201V12.8801C2 13.9201 2.85 14.7801 3.9 14.7801C5.71 14.7801 6.45 16.0601 5.54 17.6301" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

          <h3 className="text-[#B2ABAB] text-md font-medium">Settings</h3>
        </div>

        <div className="py-[8px] cursor-pointer flex gap-5 pl-2 pr-6 rounded-lg hover:bg-[#B2ABAB]/10">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.56 14.5599L4 11.9999L6.56 9.43994" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.23982 12H4.06982" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.2398 12H12.2798" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 4C13.05 4 14.05 4.17 14.97 4.49" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

          <h3 className="text-[#B2ABAB] text-md font-medium">Log Out</h3>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
