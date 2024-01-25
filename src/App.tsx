import "./index.css";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import BarChart from "./components/bar-chart";
import StatsCard from "./components/stats-cards";
import OrdersTable from "./components/orders-table";
import PlatformChart from "./components/platform-chart";

function App() {
  return (
    <main className="bg-[#FAFAFA] h-[100vh] w-full flex items-center justify-centers">
      <Sidebar />
      <div className="hidden lg:block h-[100vh] w-[85px]"></div>
      <div className="h-[100vh] w-[100%]">
        <Navbar />
        <div className="w-full h-[90px]"></div>

        <section className="flex flex-col gap-[24px] lg:gap-[20px] p-5 w-full bg-[#FAFAFA]">
          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[20px]">
            <BarChart />
            <StatsCard />
          </div>

          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[20px] w-full">
            <OrdersTable />
            <PlatformChart />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
