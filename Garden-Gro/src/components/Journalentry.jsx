import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

const JournalEntry = () => {
  const [journal, setJournal] = useState([]);

  // Fetch the journal entries from Supabase
  async function getJournals() {
    const { data, error } = await supabase.from("journalentries").select();
    if (error) {
      console.error("Error fetching journal entries:", error);
    } else {
      console.log("DATA", data)
      setJournal(data);
    }
  }

  // Fetch journal entries on component mount
  useEffect(() => {
    getJournals();
  }, []);

  const journalItems = journal.map((j, idx) => (
    <div key={idx} className="border border-yellow-400 m-4 p-4 rounded-lg">
      <div className="border border-white">
        {j.imageUrl && (
          <img
            className="border border-white object-cover w-full"
            src={j.imageUrl}
            alt={`Journal entry ${idx}`}
          />
        )}
      </div>
      <div className="p-4 text-sm">{j.entry}</div>
    </div>
  ));


    return (
    <>
      <div className="m-16 flex justify-center items-center flex-col rounded-lg w-80">
        {journalItems}
      </div>
    </>
  );
};

export default JournalEntry;
