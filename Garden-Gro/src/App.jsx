import { useState } from "react";
import JournalEntry from "./components/Journalentry";
import { WeatherAPI } from "./components/WeatherApi";
import NavBar from "./components/NavBar";

function App() {
  const [entry, setEntry] = useState(false);
  const [calenderEvent, setCalenderEvent] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="relative min-h-screen bg-indigo-50">
      <NavBar/>

      <div
        className="w-full bg-indigo-50 absolute"
        style={{ zIndex: 0 }}
      ></div>

      <div className="relative flex flex-col justify-center items-center">
        <div className="flex justify-start">
          <div className="flex px-4 justify-start w-full max-w-2xl">
            <JournalEntry />
          </div>
          <WeatherAPI />
        </div>
      </div>
    </div>
  );
}

export default App;
