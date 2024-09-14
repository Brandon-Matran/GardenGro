import { useState } from "react";
import JournalEntry from "./components/Journalentry";
import { WeatherAPI } from "./components/WeatherApi";
import NavBar from "./components/NavBar";

function App() {
  const [entry, setEntry] = useState(false);
  const [calenderEvent, setCalenderEvent] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "rgb(237, 240, 242)"}}>
      <NavBar/>

      <div
        className="w-full bg-indigo-50 absolute"
        style={{ zIndex: 0}}
      ></div>

      <div className="relative flex flex-col justify-center items-center">
        <div className="">
        <WeatherAPI />
          <div className="flex justify-start w-full max-w-2xl">
           
            <JournalEntry />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
