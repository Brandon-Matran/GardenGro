import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

const JournalEntry = () => {
  const [journal, setJournal] = useState([]);

  async function getJournals() {
    const { data, error } = await supabase.from("journalentries").select();
    if (error) {
      console.error("Error fetching journal entries:", error);
    } else {
      setJournal(data);
    }
  }

  useEffect(() => {
    getJournals();
  }, []);

  const journalItems = journal.map((j, idx) => (
    <div key={idx} className="mx-2">
      <div
        className="shadow-lg flex items-center flex-col justify-center m-4  object-cover h-64 rounded-lg overflow-clip p-0 max-w-2xl"
        style={{
          fontFamily: "'Fugaz One', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        <div className=" w-48 ">
          {j.imageUrl && (
            <img
              className="object-cover h-32 w-48 rounded-t-lg"
              src={j.imageUrl}
              alt={`Journal entry ${idx}`}
            />
          )}
        </div>
        <div className="border flex flex-col p-4 text-xs h-32 w-48 overflow-hidden text-ellipsis overflow-y-scroll bg-white justify-start items-center">
          {j.entry}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="mt-24 md:flex-row flex flex-col items-center rounded-lg border-red-200 border">
        <div className="flex h-full justify-start items-start ">Test</div>
        {journalItems}
      </div>
    </>
  );
};

export default JournalEntry;
