import { useState } from "react";
import JournalEntry from "./components/Journalentry";
import { WeatherAPI } from "./components/WeatherApi";
import { JournalSubmit } from "./components/JournalSubmit";
function App() {
  const [entry, setEntry] = useState(false);
  const [calenderEvent, setCalenderEvent] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex ">
          <div className="px-5">
            <button
              onClick={(e) => {
                setEntry(true);
              }}
            >
              Create Entry
            </button>
          </div>
          <div className="px-5">
            <button>Create Reminder</button>
          </div>
        </div>

        {entry && (
          <JournalSubmit
            onClose={() => {
              setEntry(false);
            }}
          />
        )}
        <div className="flex justify-start">
          <div className="flex flex-wrap justify-start w-full max-w-2xl">
            <JournalEntry />
          </div>

          <WeatherAPI />
        </div>
      </div>
    </>
  );
}

export default App;
