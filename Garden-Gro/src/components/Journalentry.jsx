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


      <div className="">
        <div key={idx} className="flex items-center flex-col  m-4 w-48  object-cover h-64 rounded-lg overflow-clip border border-red-200 p-0">
          <div className=" w-48">
            {j.imageUrl && (
              <img
                className="object-cover h-32 w-48 rounded-t-lg"
                src={j.imageUrl}
                alt={`Journal entry ${idx}`}
              />
            )}
          </div>
          <div className="borderflex flex-col p-4 text-xs h-32 w-48 overflow-hidden text-ellipsis overflow-y-scroll">{j.entry}</div>
        </div>
      </div>

  ));

  return (
    <>
      <div className="m-16 flex justify-center items-start rounded-lg w-80">
        {journalItems}
      </div>
    </>
  );
};

export default JournalEntry;
