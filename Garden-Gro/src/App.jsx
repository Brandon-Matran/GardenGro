import { useState } from "react";
import JournalEntry from "./components/Journalentry";
import { WeatherAPI } from "./components/WeatherApi";
import { JournalSubmit } from "./components/JournalSubmit";
function App() {
  const [entry, setEntry] = useState(false)
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <button onClick={(e)=>{setEntry(true)}}>Create Entry</button>
        {entry && <JournalSubmit onClose={()=>{setEntry(false)}}/>}
        <div className="flex flex-wrap justify-center w-full max-w-3xl">
          <JournalEntry />
          <WeatherAPI />
        </div>
      </div>
    </>
  );
}

export default App;
