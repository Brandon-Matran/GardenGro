
import JournalEntry from "./components/Journalentry";
import { WeatherAPI } from "./components/WeatherApi";
import NavBar from "./components/NavBar";
import Calendar from "react-calendar";


function App() {


  return (
    <div
      className="relative min-h-screen w-full"
      style={{ backgroundColor: "rgb(237, 240, 242)" }}
    >
      <div className="w-full "><NavBar /></div>
      <i class="fa-solid fa-chevron-left"></i>

      <div className="w-full bg-indigo-50" style={{ zIndex: 0 }}></div>

      <div className="flex flex-col justify-center items-center">
        <div>
          <WeatherAPI />
        </div>
<div></div>
        <JournalEntry />
<Calendar />
      </div>
    </div>
  );
}

export default App;
