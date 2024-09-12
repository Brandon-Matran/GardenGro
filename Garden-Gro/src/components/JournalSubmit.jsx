import { useState } from "react";
import supabase
 from "../lib/supabaseClient";
export const JournalSubmit = (props) => {
  const {onClose} = props;

  const [image, setImage] = useState("");
  const [entry, setEntry] = useState("");
  const [plant, setPlant] = useState("");
  const [maturity, setMaturity] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  async function submitJournal() {
    const { data, error } = await supabase
      .from('journalentries')
      .insert([
        {
          date: date,         // Ensure these column names match your table schema
          imageUrl: image,
          entry: entry,
          plantName: plant,
          daysToMaturity: maturity
        },
      ]);

    if (error) {
      console.error('Error inserting journal entry:', error);
    } else {
      console.log('Journal entry inserted:', data);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitJournal()

    setPlant("");
    setImage("");
    setEntry("");
    setMaturity()
    setDate(new Date().toLocaleDateString()); // Update date to current date for next entry
  };

  return (
    <>
      <div className="flex justify-center items-center fixed bg-gray-300/60 backdrop-blur-sm h-full w-full top-0">
        <div className="border-white-800 bg-white flex flex-col h-80 w-80 items-center justify-center rounded-lg">
          <div>Make a Journal Entry</div>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Plant Type"
                value={plant}
                onChange={(e) => setPlant(e.target.value)}
              />
              <input
                placeholder="Plant Picture"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                rows={3} // Fixed typo here
                className="w-full"
              ></textarea>
            </div>
            <div className="border border-red-200 items-center flex justify-between px-6">
              <button type="submit">Submit</button>
              <button onClick={onClose}>Close</button>
            </div>
          </form>
        </div>
        {/* <div>{journalItems}</div> */}
      </div>
    </>
  );
};
