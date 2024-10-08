import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

const JournalEntry = () => {
  const [journal, setJournal] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % journal.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + journal.length) % journal.length
    );
  };

  if (journal.length === 0) {
    return <p>No journal entries available</p>;
  }

  const j = journal[currentIndex];

  return (
    <div className="mt-24 flex flex-col items-center w-full px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full md:max-w-4xl p-4">
        {j.imageUrl && (
          <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0 px-4">
            <img
              className="object-cover rounded-lg w-full h-64"
              src={j.imageUrl}
              alt={`Journal entry ${currentIndex}`}
            />
          </div>
        )}
        <div className="flex flex-col justify-center w-full md:w-2/3">
          <div className="flex justify-center items-center mb-4 ">
            <button
              className="w-12 px-4 py-2 rounded-md"
              onClick={handlePrev}
            >
                <i className="fa-solid fa-chevron-left text-2xl"/>
            </button>
            <div className="flex justify-center items-center p-4 rounded-lg overflow-auto h-48 md:h-64 text-sm w-full">
            {j.entry}
          </div>
            <button
              className="w-12 px-4 py-2"
              onClick={handleNext}
            >
             <i class="fa-solid fa-chevron-right text-2xl"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
