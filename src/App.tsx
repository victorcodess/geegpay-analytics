import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="bg-[#FAFAFA] h-[100vh] w-full flex items-center justify-centers">
      <Sidebar />
      <div className="h-[100vh] w-[100%]">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
