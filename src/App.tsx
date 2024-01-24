import "./index.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import BarChart from "./components/bar-chart";

function App() {
  return (
    <main className="bg-[#FAFAFA] h-[100vh] w-full flex items-center justify-centers">
      <Sidebar />
      <div className="h-[100vh] w-[100%]">
        <Navbar />

        <section className="flex p-5 w-full bg-[#FAFAFA]">
          <BarChart />

          <div></div>
        </section>
      </div>
    </main>
  );
}

export default App;
