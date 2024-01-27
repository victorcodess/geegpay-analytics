import "./index.css";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import BarChart from "./components/bar-chart-card";
import StatsCard from "./components/stats-cards";
import OrdersTable from "./components/orders-table";
import PlatformChart from "./components/platform-chart";
import { ThemeProvider } from "./ThemeContext";

function App() {
  // function handleClick() {
  //   if (localStorage.theme === "dark" || !("theme" in localStorage)) {
  //     //add class=dark in html element
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     //remove class=dark in html element
  //     document.documentElement.classList.remove("dark");
  //   }

  //   if (localStorage.theme === "dark") {
  //     localStorage.theme = "light";
  //   } else {
  //     localStorage.theme = "dark";
  //   }
  // }

  return (
    <ThemeProvider >
      <main className="bg-[#FAFAFA] dark:bg-[#121212] h-[100vh] w-full flex items-center justify-centers">
        <Sidebar />
        <div className="h-[100vh] hidden lg:block w-[85px] border"></div>
        <div className="h-[100vh] w-[100%]">
          <Navbar />
          <div className="w-full h-[90px]"></div>

          <section className="flex flex-col gap-[24px] md:gap-[20px] p-5 w-full bg-[#FAFAFA] dark:bg-[#121212]">
            <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[20px]">
              <BarChart />
              <StatsCard />
            </div>

            <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[20px] w-full">
              <OrdersTable />
              <PlatformChart />
            </div>
          </section>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
