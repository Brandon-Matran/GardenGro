import { useState } from "react";
import JournalEntry from "./components/Journalentry";
import { WeatherAPI } from "./components/WeatherApi";
import { JournalSubmit } from "./components/JournalSubmit";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center w-full max-w-3xl">
          <JournalEntry />
          <JournalSubmit />
          <WeatherAPI />
        </div>
      </div>
    </>
  );
}

export default App;
