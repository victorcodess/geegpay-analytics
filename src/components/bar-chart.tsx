const BarChart = () => {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] border rounded-[14px] border-[#EDF2F7] dark:border-[#1A1A1A]">
      <div className="flex items-center justify-between px-[20px] py-[16px]">
        <h4 className="text-md lg:text-lg font-semibold text-[#26282C] dark:text-[#D3D5D9]">
          Sales Trends
        </h4>

        <div className="flex items-center justify-center gap-2.5">
          <h4 className="text-xs lg:text-sm font-medium text-[#3A3F51]">
            Short By:
          </h4>
          <button className="text-[#3A3F51] text-[10px] gap-2.5 lg:text-xs flex items-center justify-center px-[12px] py-[6px] border border-[#E1DFDF] dark:border-[#2D2A2A] rounded-full">
            Weekly
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path className="fill-black dark:fill-white" d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z"/>
                  </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[12px] pb-[16px]">
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
              <div className="w-[20px] md:w-[30px] h-[68px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[120px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[40px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[161px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[81px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] relative md:w-[30px] h-[216px] linear-bg rounded-t-[20px] flex items-center justify-center">
                <div className="absolute top-[-35px] flex items-center justify-center ">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32" fill="none" className="drop-shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
  <path className="fill-[#090C2C] dark:fill-[#D3D6F6]" fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"/>
</svg>

                  <h5 className="absolute text-white dark:text-[#0D0D0D] text-xs font-semibold pb-[5px]">
                    $45.000
                  </h5>
                </div>
              </div>

              <div className="w-[20px] md:w-[30px] h-[81px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[131px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[182px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[51px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[171px] bg-[#34CAA51A] rounded-t-[20px]"></div>
              <div className="w-[20px] md:w-[30px] h-[151px] bg-[#34CAA51A] rounded-t-[20px]"></div>
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

export default BarChart;
