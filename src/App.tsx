import "./index.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import BarChart from "./components/bar-chart";
import StatsCard from "./components/stats-cards";

function App() {
  return (
    <main className="bg-[#FAFAFA] h-[100vh] w-full flex items-center justify-centers">
      <Sidebar />
      <div className="h-[100vh] w-[100%]">
        <Navbar />

        <section className="flex flex-col gap-[24px] lg:gap-[20px] lg:flex-row p-5 w-full bg-[#FAFAFA]">
          <BarChart />

          <StatsCard />
        </section>
      </div>
    </main>
  );
}

export default App;
